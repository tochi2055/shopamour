import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p>
          At Shop Amour, we respect your privacy and are committed to protecting your personal data. This Privacy Policy
          explains how we collect, use, and safeguard your information when you use our platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
        <p>
          <strong>Personal Information:</strong> When you register for an account, we collect your name, email address,
          phone number, and shipping address.
        </p>
        <p>
          <strong>Transaction Information:</strong> We collect information about your purchases and sales, including
          payment information.
        </p>
        <p>
          <strong>Usage Information:</strong> We collect information about how you interact with our platform, including
          your browsing history, search queries, and device information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send you technical notices, updates, and support messages</li>
          <li>Respond to your comments and questions</li>
          <li>Personalize your experience on our platform</li>
          <li>Monitor and analyze trends, usage, and activities</li>
          <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Information Sharing and Disclosure</h2>
        <p>We may share your information with:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Other users as necessary to facilitate transactions</li>
          <li>Service providers who perform services on our behalf</li>
          <li>Law enforcement or other third parties if required by law</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information from unauthorized access,
          alteration, disclosure, or destruction.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>The right to access your personal information</li>
          <li>The right to correct inaccurate information</li>
          <li>The right to delete your information</li>
          <li>The right to restrict or object to processing</li>
          <li>The right to data portability</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to track activity on our platform and hold certain
          information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Children's Privacy</h2>
        <p>
          Our platform is not intended for children under 13 years of age. We do not knowingly collect personal
          information from children under 13.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at privacy@shopamour.com.</p>
      </div>

      <div className="mt-12 flex justify-center">
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}
