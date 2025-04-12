"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MatchingAlgorithm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Our Matching Algorithm</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          We use a sophisticated algorithm to ensure the best possible matches for your travel companions.
        </p>
      </CardContent>
    </Card>
  )
}
