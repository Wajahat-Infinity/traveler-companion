"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

export function PartnerLocationsMap() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  const regions = [
    { id: "punjab", name: "Punjab", partners: 18, x: 150, y: 200 },
    { id: "sindh", name: "Sindh", partners: 12, x: 120, y: 300 },
    { id: "kpk", name: "Khyber Pakhtunkhwa", partners: 8, x: 100, y: 120 },
    { id: "balochistan", name: "Balochistan", partners: 5, x: 50, y: 250 },
    { id: "gilgit", name: "Gilgit-Baltistan", partners: 7, x: 180, y: 80 },
    { id: "ajk", name: "Azad Kashmir", partners: 4, x: 200, y: 150 },
    { id: "islamabad", name: "Islamabad", partners: 6, x: 160, y: 170 },
  ]

  return (
    <div className="h-[250px] w-full bg-slate-100 dark:bg-slate-900 rounded-md relative">
      {/* Simple map representation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="250" height="250" viewBox="0 0 250 350">
          {/* This is a simplified map outline */}
          <path
            d="M30,100 C50,50 100,30 150,50 C200,70 220,100 230,150 C240,200 230,250 200,300 C170,330 120,340 80,320 C40,300 20,250 30,200 C40,150 30,120 30,100 Z"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="2"
          />

          {/* Partner location pins */}
          {regions.map((region) => (
            <g
              key={region.id}
              transform={`translate(${region.x}, ${region.y})`}
              onMouseEnter={() => setHoveredRegion(region.id)}
              onMouseLeave={() => setHoveredRegion(null)}
              style={{ cursor: "pointer" }}
            >
              <circle
                r={hoveredRegion === region.id ? 8 : 6}
                fill={hoveredRegion === region.id ? "#10b981" : "#10b98199"}
                stroke="#ffffff"
                strokeWidth="1"
              />
              <text
                x="10"
                y="5"
                fontSize="10"
                fill="currentColor"
                fontWeight={hoveredRegion === region.id ? "bold" : "normal"}
              >
                {region.name} ({region.partners})
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="absolute bottom-2 left-2 bg-white dark:bg-slate-800 p-2 rounded-md text-xs">
        <div className="flex items-center">
          <MapPin className="h-4 w-4 text-emerald-600 mr-1" />
          <span>Partner Locations</span>
        </div>
      </div>
    </div>
  )
}
