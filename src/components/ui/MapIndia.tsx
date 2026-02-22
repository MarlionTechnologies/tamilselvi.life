"use client";

import { useState } from "react";
import type { School } from "@/content/schools";

interface MapIndiaProps {
  schools: School[];
}

/* Approximate bounding box for South India focused view */
const MAP = {
  minLat: 8.0,
  maxLat: 14.0,
  minLng: 76.0,
  maxLng: 81.0,
  width: 600,
  height: 500,
};

function toSVG(lat: number, lng: number) {
  const x = ((lng - MAP.minLng) / (MAP.maxLng - MAP.minLng)) * MAP.width;
  const y = ((MAP.maxLat - lat) / (MAP.maxLat - MAP.minLat)) * MAP.height;
  return { x, y };
}

export function MapIndia({ schools }: MapIndiaProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg
        viewBox={`0 0 ${MAP.width} ${MAP.height}`}
        className="w-full h-auto"
        role="img"
        aria-label="Map of South India showing school locations"
      >
        {/* Background shape — simplified South India outline */}
        <defs>
          <radialGradient id="mapGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--warmth)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--warmth)" stopOpacity="0.05" />
          </radialGradient>
        </defs>
        <ellipse
          cx={MAP.width / 2}
          cy={MAP.height / 2}
          rx={MAP.width * 0.45}
          ry={MAP.height * 0.45}
          fill="url(#mapGrad)"
          stroke="var(--border)"
          strokeWidth="1"
        />

        {/* Grid lines */}
        {[9, 10, 11, 12, 13].map((lat) => {
          const { y } = toSVG(lat, MAP.minLng);
          return (
            <line
              key={`lat-${lat}`}
              x1="40"
              y1={y}
              x2={MAP.width - 40}
              y2={y}
              stroke="var(--border)"
              strokeWidth="0.5"
              strokeDasharray="4 4"
              opacity="0.4"
            />
          );
        })}

        {/* School pins */}
        {schools.map((school, i) => {
          const { x, y } = toSVG(school.lat, school.lng);
          const isActive = active === i;
          return (
            <g
              key={school.name}
              onClick={() => setActive(isActive ? null : i)}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="cursor-pointer"
              role="button"
              aria-label={`${school.name}, ${school.location}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") setActive(isActive ? null : i);
              }}
            >
              {/* Pulse ring */}
              {school.highlight && (
                <circle
                  cx={x}
                  cy={y}
                  r={isActive ? 20 : 12}
                  fill="none"
                  stroke="var(--heart)"
                  strokeWidth="1.5"
                  opacity={isActive ? 0.6 : 0.3}
                  className="transition-all duration-300"
                />
              )}
              {/* Pin dot */}
              <circle
                cx={x}
                cy={y}
                r={isActive ? 8 : 6}
                fill={school.highlight ? "var(--heart)" : "var(--depth)"}
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300"
              />
              {/* Label */}
              <text
                x={x}
                y={y - 14}
                textAnchor="middle"
                className="text-xs font-medium fill-current"
                style={{ fill: "var(--text)", fontSize: "11px" }}
                opacity={isActive ? 1 : 0.7}
              >
                {school.location}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Info card overlay */}
      {active !== null && (
        <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-5 border border-border animate-fade-up">
          <h4 className="text-base font-semibold text-text-primary mb-1">
            {schools[active].name}
          </h4>
          <p className="text-xs text-depth font-medium mb-2">
            {schools[active].location}, {schools[active].state}
          </p>
          <p className="text-sm text-text-secondary leading-relaxed">
            {schools[active].description}
          </p>
        </div>
      )}
    </div>
  );
}
