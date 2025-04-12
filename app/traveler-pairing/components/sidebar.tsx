"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Building, ChevronLeft, ChevronRight, Compass, Globe, Home, Hotel, MapPin, Menu, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  const navItems = [
    {
      title: "Home",
      href: "/",
      icon: Home,
    },
    {
      title: "Dashboards",
      items: [
        {
          title: "Hotels",
          href: "/hotels",
          icon: Hotel,
          description: "Browse and book hotels",
        },
        {
          title: "Local Guides",
          href: "/local-guides",
          icon: Compass,
          description: "Find verified local guides",
        },
        {
          title: "Travel Agencies",
          href: "/travel-agencies",
          icon: Building,
          description: "Connect with travel agencies",
        },
      ],
    },
    {
      title: "Explore",
      items: [
        {
          title: "Destinations",
          href: "/destinations",
          icon: MapPin,
          description: "Discover places to visit",
        },
        {
          title: "Find Companions",
          href: "/traveler-pairing",
          icon: Users,
          description: "Connect with other travelers",
        },
        {
          title: "Recommendations",
          href: "/recommendations",
          icon: Globe,
          description: "Get personalized suggestions",
        },
      ],
    },
  ]

  return (
    <>
      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <div className="h-full py-6 pl-6 pr-2">
              <div className="flex items-center mb-6">
                <Link href="/" className="flex items-center gap-2">
                  <Globe className="h-6 w-6 text-emerald-600" />
                  <span className="font-bold text-xl">Traveler</span>
                </Link>
              </div>
              <div className="space-y-6">
                {navItems.map((section, i) => (
                  <div key={i} className="space-y-2">
                    <h3 className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                      {section.title}
                    </h3>
                    {section.items ? (
                      <div className="space-y-1">
                        {section.items.map((item, j) => (
                          <Button
                            key={j}
                            variant="ghost"
                            className={cn(
                              "w-full justify-start gap-2",
                              pathname === item.href && "bg-muted font-medium",
                            )}
                            asChild
                          >
                            <Link href={item.href}>
                              <item.icon className="h-4 w-4" />
                              {item.title}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    ) : (
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start gap-2",
                          pathname === section.href && "bg-muted font-medium",
                        )}
                        asChild
                      >
                        <Link href={section.href}>
                          <section.icon className="h-4 w-4" />
                          {section.title}
                        </Link>
                      </Button>
                    )}
                  </div>
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
            <Link href="/" className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-emerald-600" />
              <span className="font-bold text-xl">Traveler</span>
            </Link>
          )}
          {collapsed && <Globe className="h-6 w-6 text-emerald-600 mx-auto" />}
        </div>
        <div className={cn("flex-1 overflow-auto py-4", collapsed ? "px-2" : "px-4")}>
          <div className="space-y-6">
            {navItems.map((section, i) => (
              <div key={i} className="space-y-2">
                {!collapsed && (
                  <h3 className="text-xs font-semibold text-muted-foreground tracking-wider uppercase px-2">
                    {section.title}
                  </h3>
                )}
                {section.items ? (
                  <div className="space-y-1">
                    {section.items.map((item, j) => (
                      <Button
                        key={j}
                        variant="ghost"
                        className={cn(
                          "w-full justify-start gap-2",
                          pathname === item.href && "bg-muted font-medium",
                          collapsed && "justify-center px-2",
                        )}
                        asChild
                        title={collapsed ? item.title : undefined}
                      >
                        <Link href={item.href}>
                          <item.icon className="h-4 w-4" />
                          {!collapsed && item.title}
                        </Link>
                      </Button>
                    ))}
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-2",
                      pathname === section.href && "bg-muted font-medium",
                      collapsed && "justify-center px-2",
                    )}
                    asChild
                    title={collapsed ? section.title : undefined}
                  >
                    <Link href={section.href}>
                      <section.icon className="h-4 w-4" />
                      {!collapsed && section.title}
                    </Link>
                  </Button>
                )}
              </div>
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
