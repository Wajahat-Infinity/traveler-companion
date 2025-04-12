"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CalendarDays, CreditCard, Heart, Home, MapPin, MessageSquare, Settings, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "My Trips",
    href: "/dashboard/trips",
    icon: CalendarDays,
  },
  {
    title: "Bookings",
    href: "/dashboard/bookings",
    icon: CreditCard,
  },
  {
    title: "Saved",
    href: "/dashboard/saved",
    icon: Heart,
  },
  {
    title: "Messages",
    href: "/dashboard/messages",
    icon: MessageSquare,
  },
  {
    title: "Travel Companions",
    href: "/dashboard/companions",
    icon: Users,
  },
  {
    title: "Explore",
    href: "/dashboard/explore",
    icon: MapPin,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

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
