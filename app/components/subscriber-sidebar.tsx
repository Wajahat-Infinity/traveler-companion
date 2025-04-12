"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart,
  Bed,
  Building,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Compass,
  CreditCard,
  Globe,
  Home,
  Hotel,
  MessageSquare,
  Settings,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface SubscriberSidebarProps {
  className?: string
  subscriberType: "hotel" | "guide" | "agency"
  subscriberName: string
  onNavigate?: (section: string) => void
}

export function SubscriberSidebar({ className, subscriberType, subscriberName, onNavigate }: SubscriberSidebarProps) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  // Define navigation items based on subscriber type
  const getNavItems = () => {
    const commonItems = [
      {
        title: "Dashboard",
        href: "/vendor/dashboard",
        icon: Home,
        section: "dashboard",
      },
      {
        title: "Bookings",
        href: "/vendor/dashboard/bookings",
        icon: Calendar,
        section: "bookings",
      },
      {
        title: "Messages",
        href: "/vendor/dashboard/messages",
        icon: MessageSquare,
        section: "messages",
      },
      {
        title: "Analytics",
        href: "/vendor/dashboard/analytics",
        icon: BarChart,
        section: "analytics",
      },
      {
        title: "Payments",
        href: "/vendor/dashboard/payments",
        icon: CreditCard,
        section: "payments",
      },
      {
        title: "Settings",
        href: "/vendor/dashboard/settings",
        icon: Settings,
        section: "settings",
      },
    ]

    // Add subscriber-specific items
    if (subscriberType === "hotel") {
      return [
        ...commonItems.slice(0, 2),
        {
          title: "Rooms",
          href: "/vendor/dashboard/rooms",
          icon: Bed,
          section: "rooms",
        },
        ...commonItems.slice(2),
      ]
    } else if (subscriberType === "guide") {
      return [
        ...commonItems.slice(0, 2),
        {
          title: "Tours",
          href: "/vendor/dashboard/tours",
          icon: Compass,
          section: "tours",
        },
        ...commonItems.slice(2),
      ]
    } else if (subscriberType === "agency") {
      return [
        ...commonItems.slice(0, 2),
        {
          title: "Packages",
          href: "/vendor/dashboard/packages",
          icon: Building,
          section: "packages",
        },
        ...commonItems.slice(2),
      ]
    }

    return commonItems
  }

  const navItems = getNavItems()

  // Get the title based on subscriber type
  const getTitle = () => {
    switch (subscriberType) {
      case "hotel":
        return "Hotel Dashboard"
      case "guide":
        return "Guide Dashboard"
      case "agency":
        return "Agency Dashboard"
      default:
        return "Dashboard"
    }
  }

  // Get the icon based on subscriber type
  const getIcon = () => {
    switch (subscriberType) {
      case "hotel":
        return <Hotel className="h-6 w-6 text-emerald-600" />
      case "guide":
        return <Compass className="h-6 w-6 text-emerald-600" />
      case "agency":
        return <Building className="h-6 w-6 text-emerald-600" />
      default:
        return <Globe className="h-6 w-6 text-emerald-600" />
    }
  }

  const handleNavigation = (item: any, e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault()
      onNavigate(item.section)
    }
  }

  return (
    <>
      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-2">
              {getIcon()}
              <span className="sr-only">Open dashboard</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <div className="h-full py-6 pl-6 pr-2">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  {getIcon()}
                  <span className="font-bold text-xl">{getTitle()}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-8 px-2">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>{subscriberName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{subscriberName}</p>
                  <p className="text-xs text-muted-foreground capitalize">{subscriberType} Subscriber</p>
                </div>
              </div>

              <div className="space-y-1">
                {navItems.map((item, i) => (
                  <Button
                    key={i}
                    variant="ghost"
                    className={cn("w-full justify-start gap-2", pathname === item.href && "bg-muted font-medium")}
                    asChild
                  >
                    <Link href={item.href} onClick={(e) => handleNavigation(item, e)}>
                      <item.icon className="h-4 w-4" />
                      {item.title}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          "hidden lg:flex flex-col border-r bg-background transition-all duration-300",
          collapsed ? "w-16" : "w-64",
          className,
        )}
      >
        <div className="flex h-14 items-center px-4 border-b">
          {!collapsed && (
            <div className="flex items-center gap-2">
              {getIcon()}
              <span className="font-bold text-xl">{getTitle()}</span>
            </div>
          )}
          {collapsed && <div className="mx-auto">{getIcon()}</div>}
        </div>

        {!collapsed && (
          <div className="flex items-center gap-3 m-4 p-2 border rounded-md">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>{subscriberName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{subscriberName}</p>
              <p className="text-xs text-muted-foreground capitalize">{subscriberType} Subscriber</p>
            </div>
          </div>
        )}

        {collapsed && (
          <div className="flex justify-center my-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>{subscriberName.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{subscriberName}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

        <div className={cn("flex-1 overflow-auto py-4", collapsed ? "px-2" : "px-4")}>
          <div className="space-y-1">
            {navItems.map((item, i) => (
              <Button
                key={i}
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-2",
                  pathname === item.href && "bg-muted font-medium",
                  collapsed && "justify-center px-2",
                )}
                asChild
                title={collapsed ? item.title : undefined}
              >
                <Link href={item.href} onClick={(e) => handleNavigation(item, e)}>
                  <item.icon className="h-4 w-4" />
                  {!collapsed && item.title}
                </Link>
              </Button>
            ))}
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-3 top-20 h-6 w-6 rounded-full border bg-background"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>
    </>
  )
}
