"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CheckCircle, CreditCard, Loader2 } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export default function CheckoutPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [bookingDetails, setBookingDetails] = useState({
    destination: "",
    date: "",
    travelers: 0,
    price: 0,
  })

  useEffect(() => {
    const destination = searchParams.get("destination") || ""
    const dateStr = searchParams.get("date") || ""
    const travelers = Number.parseInt(searchParams.get("travelers") || "1")

    // In a real app, you would fetch the price from an API
    // Here we're just using a simple calculation
    let price = 0
    if (destination.includes("Hunza")) {
      price = 15000
    } else if (destination.includes("Lahore")) {
      price = 8000
    } else if (destination.includes("Swat")) {
      price = 12000
    } else {
      price = 10000 // Default price
    }

    setBookingDetails({
      destination,
      date: dateStr,
      travelers,
      price,
    })
  }, [searchParams])

  const totalPrice = bookingDetails.price * bookingDetails.travelers

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)

      // Redirect to confirmation page after 2 seconds
      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)
    }, 2000)
  }

  if (isSuccess) {
    return (
      <div className="container max-w-4xl py-12">
        <div className="flex flex-col items-center justify-center text-center py-12">
          <CheckCircle className="h-16 w-16 text-emerald-600 mb-4" />
          <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
          <p className="text-muted-foreground mb-8">
            Your booking for {bookingDetails.destination} has been confirmed. A confirmation email has been sent to your
            email address.
          </p>
          <Button asChild>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container max-w-4xl py-12">
      <Link
        href={`/destinations/${bookingDetails.destination.toLowerCase().replace(/\s+/g, "-")}`}
        className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to destination
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                <RadioGroup defaultValue="card" className="space-y-4">
                  <div className="flex items-center space-x-2 border rounded-md p-4">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Credit/Debit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-4">
                    <RadioGroupItem value="bank" id="bank" />
                    <Label htmlFor="bank">Bank Transfer</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-4">
                    <RadioGroupItem value="jazzcash" id="jazzcash" />
                    <Label htmlFor="jazzcash">JazzCash</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-4">
                    <RadioGroupItem value="easypaisa" id="easypaisa" />
                    <Label htmlFor="easypaisa">EasyPaisa</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Card Details</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" placeholder="Enter name on card" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="0000 0000 0000 0000" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" required />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="Enter your address" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Enter city" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input id="postalCode" placeholder="Enter postal code" required />
                    </div>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  `Pay PKR ${totalPrice.toLocaleString()}`
                )}
              </Button>
            </div>
          </form>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
              <CardDescription>Review your booking details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">{bookingDetails.destination}</h3>
                <p className="text-sm text-muted-foreground">
                  {bookingDetails.date ? format(new Date(bookingDetails.date), "PPP") : "No date selected"}
                </p>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Price per person</span>
                  <span>PKR {bookingDetails.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Travelers</span>
                  <span>{bookingDetails.travelers}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-emerald-600">PKR {totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2 border-t pt-6">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Free cancellation</span> up to 7 days before the experience
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Secure payment</span> processed with encryption
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
