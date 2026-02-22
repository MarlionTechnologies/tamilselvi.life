import { CosmosClient, Database } from "@azure/cosmos";

let client: CosmosClient | null = null;
let db: Database | null = null;

function getClient() {
  if (!client) {
    const connectionString = process.env.COSMOS_CONNECTION_STRING;
    if (!connectionString) {
      throw new Error("COSMOS_CONNECTION_STRING not set");
    }
    client = new CosmosClient(connectionString);
  }
  return client;
}

function getDatabase() {
  if (!db) {
    db = getClient().database("tamilselvi");
  }
  return db;
}

// ============================================
// CONTACTS — Form submissions
// ============================================

export async function saveContact(data: {
  name: string;
  email: string;
  audience: string;
  fields: Record<string, string>;
}) {
  const container = getDatabase().container("contacts");
  const item = {
    ...data,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    timestamp: new Date().toISOString(),
    status: "new",
  };
  const { resource } = await container.items.create(item);
  return resource;
}

// ============================================
// VISITS — Page view tracking
// ============================================

export async function trackVisit(data: {
  page: string;
  referrer?: string;
  userAgent?: string;
  audience?: string;
  sessionId?: string;
}) {
  const container = getDatabase().container("visits");
  const item = {
    ...data,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    timestamp: new Date().toISOString(),
  };
  const { resource } = await container.items.create(item);
  return resource;
}

// ============================================
// CHATS — AI conversation logs
// ============================================

export async function saveChat(data: {
  sessionId: string;
  language: string;
  userMessage: string;
  assistantReply: string;
}) {
  const container = getDatabase().container("chats");
  const item = {
    ...data,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    timestamp: new Date().toISOString(),
  };
  const { resource } = await container.items.create(item);
  return resource;
}

// ============================================
// ADMIN — Contact queries
// ============================================

export interface ContactItem {
  id: string;
  name: string;
  email: string;
  audience: string;
  fields: Record<string, string>;
  timestamp: string;
  status: string;
  adminNotes?: string;
}

export async function listContacts(options: {
  audience?: string;
  status?: string;
  limit?: number;
  offset?: number;
} = {}): Promise<{ items: ContactItem[]; total: number }> {
  const container = getDatabase().container("contacts");
  const conditions: string[] = [];
  const parameters: { name: string; value: string }[] = [];

  if (options.audience) {
    conditions.push("c.audience = @audience");
    parameters.push({ name: "@audience", value: options.audience });
  }
  if (options.status) {
    conditions.push("c.status = @status");
    parameters.push({ name: "@status", value: options.status });
  }

  const where = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
  const limit = options.limit || 20;
  const offset = options.offset || 0;

  const countQuery = `SELECT VALUE COUNT(1) FROM c ${where}`;
  const { resources: countResult } = await container.items
    .query({ query: countQuery, parameters })
    .fetchAll();

  const dataQuery = `SELECT * FROM c ${where} ORDER BY c.timestamp DESC OFFSET ${offset} LIMIT ${limit}`;
  const { resources: items } = await container.items
    .query({ query: dataQuery, parameters })
    .fetchAll();

  return { items: items as ContactItem[], total: countResult[0] || 0 };
}

export async function getContact(id: string): Promise<ContactItem | null> {
  const container = getDatabase().container("contacts");
  try {
    const { resource } = await container.item(id, id).read();
    return (resource as ContactItem) || null;
  } catch {
    return null;
  }
}

export async function updateContact(
  id: string,
  updates: { status?: string; adminNotes?: string }
): Promise<ContactItem | null> {
  const container = getDatabase().container("contacts");
  try {
    const { resource: existing } = await container.item(id, id).read();
    if (!existing) return null;
    const updated = { ...existing, ...updates };
    const { resource } = await container.item(id, id).replace(updated);
    return resource as ContactItem;
  } catch {
    return null;
  }
}

// ============================================
// ADMIN — Analytics queries
// ============================================

export async function getVisitStats(options: {
  startDate: string;
  endDate: string;
}): Promise<{
  totalViews: number;
  uniqueSessions: number;
  dailyCounts: { date: string; count: number }[];
  topPages: { page: string; count: number }[];
  topReferrers: { referrer: string; count: number }[];
}> {
  const container = getDatabase().container("visits");
  const params = [
    { name: "@start", value: options.startDate },
    { name: "@end", value: options.endDate },
  ];

  const [totalRes, sessionRes, dailyRes, pagesRes, referrerRes] =
    await Promise.all([
      container.items
        .query({
          query: `SELECT VALUE COUNT(1) FROM c WHERE c.timestamp >= @start AND c.timestamp <= @end`,
          parameters: params,
        })
        .fetchAll(),
      container.items
        .query({
          query: `SELECT DISTINCT VALUE c.sessionId FROM c WHERE c.timestamp >= @start AND c.timestamp <= @end AND IS_DEFINED(c.sessionId)`,
          parameters: params,
        })
        .fetchAll(),
      container.items
        .query({
          query: `SELECT SUBSTRING(c.timestamp, 0, 10) AS date, COUNT(1) AS count FROM c WHERE c.timestamp >= @start AND c.timestamp <= @end GROUP BY SUBSTRING(c.timestamp, 0, 10)`,
          parameters: params,
        })
        .fetchAll(),
      container.items
        .query({
          query: `SELECT c.page AS page, COUNT(1) AS count FROM c WHERE c.timestamp >= @start AND c.timestamp <= @end GROUP BY c.page`,
          parameters: params,
        })
        .fetchAll(),
      container.items
        .query({
          query: `SELECT c.referrer AS referrer, COUNT(1) AS count FROM c WHERE c.timestamp >= @start AND c.timestamp <= @end AND IS_DEFINED(c.referrer) AND c.referrer != "" GROUP BY c.referrer`,
          parameters: params,
        })
        .fetchAll(),
    ]);

  const topPages = (pagesRes.resources as { page: string; count: number }[])
    .sort((a, b) => b.count - a.count)
    .slice(0, 20);
  const topReferrers = (
    referrerRes.resources as { referrer: string; count: number }[]
  )
    .sort((a, b) => b.count - a.count)
    .slice(0, 15);
  const dailyCounts = (
    dailyRes.resources as { date: string; count: number }[]
  ).sort((a, b) => a.date.localeCompare(b.date));

  return {
    totalViews: totalRes.resources[0] || 0,
    uniqueSessions: sessionRes.resources.length,
    dailyCounts,
    topPages,
    topReferrers,
  };
}

export async function getDashboardStats(): Promise<{
  totalInquiries: number;
  pendingInquiries: number;
  visitsToday: number;
  visitsWeek: number;
  visitsMonth: number;
  chatSessions: number;
  inquiriesByAudience: { audience: string; count: number }[];
}> {
  const contacts = getDatabase().container("contacts");
  const visits = getDatabase().container("visits");
  const chats = getDatabase().container("chats");

  const now = new Date();
  const todayStart = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  ).toISOString();
  const weekStart = new Date(now.getTime() - 7 * 86400000).toISOString();
  const monthStart = new Date(now.getTime() - 30 * 86400000).toISOString();

  const [totalInq, pendingInq, vToday, vWeek, vMonth, chatCount, byAudience] =
    await Promise.all([
      contacts.items.query("SELECT VALUE COUNT(1) FROM c").fetchAll(),
      contacts.items
        .query({
          query: "SELECT VALUE COUNT(1) FROM c WHERE c.status = @s",
          parameters: [{ name: "@s", value: "new" }],
        })
        .fetchAll(),
      visits.items
        .query({
          query: "SELECT VALUE COUNT(1) FROM c WHERE c.timestamp >= @d",
          parameters: [{ name: "@d", value: todayStart }],
        })
        .fetchAll(),
      visits.items
        .query({
          query: "SELECT VALUE COUNT(1) FROM c WHERE c.timestamp >= @d",
          parameters: [{ name: "@d", value: weekStart }],
        })
        .fetchAll(),
      visits.items
        .query({
          query: "SELECT VALUE COUNT(1) FROM c WHERE c.timestamp >= @d",
          parameters: [{ name: "@d", value: monthStart }],
        })
        .fetchAll(),
      chats.items
        .query({
          query: "SELECT VALUE COUNT(1) FROM c WHERE c.timestamp >= @d",
          parameters: [{ name: "@d", value: monthStart }],
        })
        .fetchAll(),
      contacts.items
        .query(
          "SELECT c.audience AS audience, COUNT(1) AS count FROM c GROUP BY c.audience"
        )
        .fetchAll(),
    ]);

  return {
    totalInquiries: totalInq.resources[0] || 0,
    pendingInquiries: pendingInq.resources[0] || 0,
    visitsToday: vToday.resources[0] || 0,
    visitsWeek: vWeek.resources[0] || 0,
    visitsMonth: vMonth.resources[0] || 0,
    chatSessions: chatCount.resources[0] || 0,
    inquiriesByAudience: byAudience.resources as {
      audience: string;
      count: number;
    }[],
  };
}
