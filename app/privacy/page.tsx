import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy | Traveler Companion Platform",
  description: "Our privacy policy and how we handle your data.",
}

export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm">
            &larr; Back to home
          </Button>
        </Link>
      </div>

      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">Last updated: April 12, 2025</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Introduction</h2>
          <p>
            Traveler Companion Platform ("we", "our", or "us") is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or
            use our services.
          </p>
          <p>
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please
            do not access the site or use our services.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when you register for an account, create or modify
            your profile, make a booking, or communicate with us. This information may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal information such as your name, email address, phone number, and billing information</li>
            <li>Profile information such as your username, password, and preferences</li>
            <li>Transaction information when you make a booking</li>
            <li>Communications you send to us</li>
          </ul>
          <p>We may also collect information automatically when you use our services, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Log information such as your IP address, browser type, pages visited, and time spent</li>
            <li>Device information about the device you use to access our services</li>
            <li>Location information when you enable location services</li>
            <li>Cookies and similar technologies to collect information about your browsing behavior</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send you technical notices, updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Communicate with you about products, services, offers, and events</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Personalize and improve your experience</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Sharing of Information</h2>
          <p>We may share the information we collect in various ways, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              With vendors, consultants, and other service providers who need access to such information to carry out
              work on our behalf
            </li>
            <li>With partners such as hotels, tour guides, and transportation services to fulfill your bookings</li>
            <li>
              In response to a request for information if we believe disclosure is in accordance with, or required by,
              any applicable law or legal process
            </li>
            <li>
              If we believe your actions are inconsistent with our user agreements or policies, or to protect the
              rights, property, and safety of us or others
            </li>
            <li>
              In connection with, or during negotiations of, any merger, sale of company assets, financing, or
              acquisition of all or a portion of our business by another company
            </li>
            <li>With your consent or at your direction</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Your Choices</h2>
          <p>You have several choices regarding the information we collect and how it is used:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Account Information: You may update, correct, or delete your account information at any time by logging
              into your account
            </li>
            <li>
              Cookies: Most web browsers are set to accept cookies by default. You can usually choose to set your
              browser to remove or reject browser cookies
            </li>
            <li>
              Promotional Communications: You may opt out of receiving promotional emails from us by following the
              instructions in those emails
            </li>
            <li>
              Location Information: You can prevent us from collecting location information by disabling location
              services on your device
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>
            Traveler Companion Platform
            <br />
            Email: privacy@travelercompanion.com
            <br />
            Address: 123 Travel Street, Islamabad, Pakistan
          </p>
        </div>
      </div>
    </div>
  )
}
