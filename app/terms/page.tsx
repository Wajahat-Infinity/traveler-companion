import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Terms of Service | Traveler Companion Platform",
  description: "Our terms of service and conditions of use.",
}

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-4 text-muted-foreground">Last updated: April 12, 2025</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Introduction</h2>
          <p>
            Welcome to Traveler Companion Platform. These Terms of Service ("Terms") govern your access to and use of
            our website, mobile applications, and services (collectively, the "Services").
          </p>
          <p>
            By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these
            Terms, you may not access or use the Services.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Using Our Services</h2>
          <p>
            You must follow any policies made available to you within the Services. You may use our Services only as
            permitted by law. We may suspend or stop providing our Services to you if you do not comply with our terms
            or policies or if we are investigating suspected misconduct.
          </p>
          <p>
            Using our Services does not give you ownership of any intellectual property rights in our Services or the
            content you access. You may not use content from our Services unless you obtain permission from its owner or
            are otherwise permitted by law.
          </p>
          <p>
            In connection with your use of the Services, we may send you service announcements, administrative messages,
            and other information. You may opt out of some of those communications.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Your Account</h2>
          <p>
            You may need an account to use some of our Services. You are responsible for safeguarding your account, so
            use a strong password and limit its use to this account. We cannot and will not be liable for any loss or
            damage arising from your failure to comply with the above.
          </p>
          <p>
            To protect your account, keep your account details confidential. You are responsible for the activity that
            happens on or through your account. If you learn of any unauthorized use of your password or account, please
            contact us immediately.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Bookings and Reservations</h2>
          <p>
            When you make a booking through our Services, you agree to the specific terms and conditions of the booking,
            including cancellation policies, payment terms, and any other requirements specified by the service
            provider.
          </p>
          <p>
            We act as an intermediary between you and the service providers (hotels, tour guides, transportation
            services, etc.). While we strive to ensure the accuracy of information provided by service providers, we
            cannot guarantee the quality, safety, or legality of the services they offer.
          </p>
          <p>
            You acknowledge that the service provider, not Traveler Companion Platform, is responsible for providing the
            actual travel services you book through our platform.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Payments</h2>
          <p>
            All payments made through our Services are processed by secure third-party payment processors. By making a
            payment, you agree to the terms and conditions of these payment processors.
          </p>
          <p>
            Prices for services are determined by the service providers and may change at any time. We will notify you
            of the total amount to be charged before you complete your booking.
          </p>
          <p>
            Refunds are subject to the cancellation policies of the service providers. We will assist you in requesting
            refunds according to these policies, but the final decision rests with the service provider.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">User Content</h2>
          <p>
            Our Services may allow you to upload, submit, store, send, or receive content such as reviews, photos, and
            other materials. You retain ownership of any intellectual property rights that you hold in that content.
          </p>
          <p>
            When you upload, submit, store, send, or receive content to or through our Services, you give us a worldwide
            license to use, host, store, reproduce, modify, create derivative works, communicate, publish, publicly
            perform, publicly display, and distribute such content.
          </p>
          <p>
            You are responsible for the content you share through our Services. Content must not violate these Terms or
            applicable law. We reserve the right to remove any content that violates these Terms or that we find
            objectionable.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, in no event shall Traveler Companion Platform, its directors,
            employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special,
            consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or
            other intangible losses, resulting from:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your access to or use of or inability to access or use the Services</li>
            <li>Any conduct or content of any third party on the Services</li>
            <li>Any content obtained from the Services</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Changes to These Terms</h2>
          <p>
            We may revise these Terms from time to time. The most current version will always be on this page. If we
            make changes that we believe are material, we will notify you through the Services or by email.
          </p>
          <p>
            By continuing to access or use the Services after revisions become effective, you agree to be bound by the
            revised Terms. If you do not agree to the new terms, please stop using the Services.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <p>
            Traveler Companion Platform
            <br />
            Email: terms@travelercompanion.com
            <br />
            Address: 123 Travel Street, Islamabad, Pakistan
          </p>
        </div>
      </div>
    </div>
  )
}
