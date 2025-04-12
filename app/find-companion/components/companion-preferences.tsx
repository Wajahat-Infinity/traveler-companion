"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CompanionPreferences() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-center">Set Your Companion Preferences</h3>

      <Card>
        <CardHeader>
          <CardTitle>Simplified Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is a simplified version of the preferences component to help identify syntax errors.
          </p>
          <div className="mt-4">
            <Button className="bg-emerald-600 hover:bg-emerald-700">Save Preferences</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
