"use client"

import { Building, Hotel, Map } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type VendorType = "hotel" | "guide" | "agency"

interface VendorTypeSelectorProps {
  currentType: VendorType
  onTypeChange: (type: VendorType) => void
}

export function VendorTypeSelector({ currentType, onTypeChange }: VendorTypeSelectorProps) {
  return (
    <Card className="mb-8">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <h2 className="text-lg font-medium mb-4 sm:mb-0">Vendor Dashboard Type</h2>

          <div className="flex space-x-2">
            <button
              onClick={() => onTypeChange("hotel")}
              className={cn(
                "flex items-center px-4 py-2 rounded-md transition-colors",
                currentType === "hotel"
                  ? "bg-emerald-600 text-white"
                  : "bg-muted hover:bg-emerald-100 dark:hover:bg-emerald-900/30",
              )}
            >
              <Hotel className="mr-2 h-4 w-4" />
              Hotel
            </button>

            <button
              onClick={() => onTypeChange("guide")}
              className={cn(
                "flex items-center px-4 py-2 rounded-md transition-colors",
                currentType === "guide"
                  ? "bg-emerald-600 text-white"
                  : "bg-muted hover:bg-emerald-100 dark:hover:bg-emerald-900/30",
              )}
            >
              <Map className="mr-2 h-4 w-4" />
              Guide
            </button>

            <button
              onClick={() => onTypeChange("agency")}
              className={cn(
                "flex items-center px-4 py-2 rounded-md transition-colors",
                currentType === "agency"
                  ? "bg-emerald-600 text-white"
                  : "bg-muted hover:bg-emerald-100 dark:hover:bg-emerald-900/30",
              )}
            >
              <Building className="mr-2 h-4 w-4" />
              Agency
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
