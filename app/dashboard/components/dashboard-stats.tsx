"use client"

import { useState } from "react"
import { BarChart, Calendar, CreditCard, MapPin } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
} from "@/components/ui/chart"
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "Jan",
    bookings: 3,
    spent: 120,
  },
  {
    name: "Feb",
    bookings: 2,
    spent: 90,
  },
  {
    name: "Mar",
    bookings: 5,
    spent: 240,
  },
  {
    name: "Apr",
    bookings: 7,
    spent: 380,
  },
  {
    name: "May",
    bookings: 4,
    spent: 200,
  },
  {
    name: "Jun",
    bookings: 6,
    spent: 320,
  },
]

export function DashboardStats() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Trips</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last year</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bookings</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">27</div>
              <p className="text-xs text-muted-foreground">+8 from last year</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Countries Visited</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">+3 from last year</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,350</div>
              <p className="text-xs text-muted-foreground">+$450 from last year</p>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="analytics" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Booking Analytics</CardTitle>
            <CardDescription>Your booking activity over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ChartContainer className="h-[300px]">
              <Chart>
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="bookings" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </Chart>
              <ChartLegend className="mt-4">
                <ChartLegendItem name="Bookings" color="hsl(var(--primary))" />
              </ChartLegend>
            </ChartContainer>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
