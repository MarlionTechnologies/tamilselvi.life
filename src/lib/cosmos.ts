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
