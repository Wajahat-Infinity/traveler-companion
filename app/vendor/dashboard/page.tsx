"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { VendorHeader } from "./components/vendor-header"

// Import specialized dashboards
import HotelDashboard from "./components/hotel-dashboard"
import GuideDashboard from "./components/guide-dashboard"
import AgencyDashboard from "./components/agency-dashboard"
import { VendorTypeSelector } from "./components/vendor-type-selector"

export default function VendorDashboardPage() {
  const router = useRouter()
  const [vendorType, setVendorType] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would come from an API or auth context
    const storedType = localStorage.getItem("vendorType")

    if (storedType) {
      setVendorType(storedType)
    } else {
      // Default to hotel if no type is set
      localStorage.setItem("vendorType", "hotel")
      setVendorType("hotel")
    }

    setIsLoading(false)
  }, [])

  const handleVendorTypeChange = (type: string) => {
    localStorage.setItem("vendorType", type)
    setVendorType(type)
    // Force a reload to update all components
    router.refresh()
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <VendorHeader />
        <div className="container flex items-center justify-center flex-1">
          <div className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <VendorHeader />

      <div className="container py-6">
        <VendorTypeSelector currentType={vendorType || "hotel"} onTypeChange={handleVendorTypeChange} />
      </div>

      {vendorType === "hotel" && <HotelDashboard />}
      {vendorType === "guide" && <GuideDashboard />}
      {vendorType === "agency" && <AgencyDashboard />}
    </div>
  )
}
