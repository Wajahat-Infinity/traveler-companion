"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart,
  BedDouble,
  Calendar,
  CreditCard,
  Home,
  Hotel,
  Map,
  MessageSquare,
  Settings,
  ShoppingBag,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type VendorType = "hotel" | "guide" | "agency"

// Define navigation items for each vendor type
const navItemsByType: Record<VendorType, { title: string; href: string; icon: React.ElementType }[]> = {
  hotel: [
    {
      title: "Dashboard",
      href: "/vendor/dashboard",
      icon: Home,
    },
    {
      title: "Rooms",
      href: "/vendor/dashboard/rooms",
      icon: BedDouble,
    },
    {
      title: "Bookings",
      href: "/vendor/dashboard/bookings",
      icon: Calendar,
    },
    {
      title: "Guests",
      href: "/vendor/dashboard/guests",
      icon: Users,
    },
    {
      title: "Messages",
      href: "/vendor/dashboard/messages",
      icon: MessageSquare,
    },
    {
      title: "Analytics",
      href: "/vendor/dashboard/analytics",
      icon: BarChart,
    },
    {
      title: "Payments",
      href: "/vendor/dashboard/payments",
      icon: CreditCard,
    },
    {
      title: "Settings",
      href: "/vendor/dashboard/settings",
      icon: Settings,
    },
  ],
  guide: [
    {
      title: "Dashboard",
      href: "/vendor/dashboard",
      icon: Home,
    },
    {
      title: "Tours",
      href: "/vendor/dashboard/tours",
      icon: Map,
    },
    {
      title: "Bookings",
      href: "/vendor/dashboard/bookings",
      icon: Calendar,
    },
    {
      title: "Clients",
      href: "/vendor/dashboard/clients",
      icon: Users,
    },
    {
      title: "Messages",
      href: "/vendor/dashboard/messages",
      icon: MessageSquare,
    },
    {
      title: "Analytics",
      href: "/vendor/dashboard/analytics",
      icon: BarChart,
    },
    {
      title: "Payments",
      href: "/vendor/dashboard/payments",
      icon: CreditCard,
    },
    {
      title: "Settings",
      href: "/vendor/dashboard/settings",
      icon: Settings,
    },
  ],
  agency: [
    {
      title: "Dashboard",
      href: "/vendor/dashboard",
      icon: Home,
    },
    {
      title: "Packages",
      href: "/vendor/dashboard/packages",
      icon: ShoppingBag,
    },
    {
      title: "Hotels",
      href: "/vendor/dashboard/hotels",
      icon: Hotel,
    },
    {
      title: "Bookings",
      href: "/vendor/dashboard/bookings",
      icon: Calendar,
    },
    {
      title: "Customers",
      href: "/vendor/dashboard/customers",
      icon: Users,
    },
    {
      title: "Messages",
      href: "/vendor/dashboard/messages",
      icon: MessageSquare,
    },
    {
      title: "Analytics",
      href: "/vendor/dashboard/analytics",
      icon: BarChart,
    },
    {
      title: "Payments",
      href: "/vendor/dashboard/payments",
      icon: CreditCard,
    },
    {
      title: "Settings",
      href: "/vendor/dashboard/settings",
      icon: Settings,
    },
  ],
}

export function VendorNav() {
  const pathname = usePathname()
  const [vendorType, setVendorType] = useState<VendorType>("hotel")

  // In a real app, you would fetch the vendor type from an API or context
  // For now, we'll simulate it with a useEffect
  useEffect(() => {
    // This would be replaced with actual data fetching
    // For demo purposes, we'll randomly select a vendor type
    const types: VendorType[] = ["hotel", "guide", "agency"]
    const storedType = localStorage.getItem("vendorType") as VendorType

    if (storedType && types.includes(storedType)) {
      setVendorType(storedType)
    } else {
      // For demo, set a random type if none is stored
      const randomType = types[Math.floor(Math.random() * types.length)]
      localStorage.setItem("vendorType", randomType)
      setVendorType(randomType)
    }
  }, [])

  const navItems = navItemsByType[vendorType]

  return (
    <nav className="grid gap-2">
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant={pathname === item.href ? "secondary" : "ghost"}
          className={cn("justify-start", pathname === item.href && "bg-muted font-medium")}
          asChild
        >
          <Link href={item.href}>
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  )
}
