"use client";

interface MetricCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  delta?: string;
  deltaType?: "positive" | "negative" | "neutral";
}

export function MetricCard({
  icon,
  value,
  label,
  delta,
  deltaType = "neutral",
}: MetricCardProps) {
  const deltaColor =
    deltaType === "positive"
      ? "#4ADE80"
      : deltaType === "negative"
        ? "#F87171"
        : "rgba(232,221,211,0.5)";

  return (
    <div className="admin-card" style={{ padding: "1.25rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: "0.75rem",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            background: "rgba(44, 95, 110, 0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#3A7A8C",
            fontSize: "1.125rem",
          }}
        >
          {icon}
        </div>
        {delta && (
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              color: deltaColor,
            }}
          >
            {delta}
          </span>
        )}
      </div>
      <div
        style={{
          fontSize: "1.75rem",
          fontWeight: 700,
          color: "#E8DDD3",
          lineHeight: 1.1,
          marginBottom: "0.25rem",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: "0.8125rem",
          color: "rgba(232, 221, 211, 0.5)",
        }}
      >
        {label}
      </div>
    </div>
  );
}
