import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They
          are widely used to make websites work more efficiently and provide information to the website owners.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
        <p>Shop Amour uses cookies for the following purposes:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They
            enable core functionality such as security, network management, and account access.
          </li>
          <li>
            <strong>Preference Cookies:</strong> These cookies enable us to remember information that changes the way
            the website behaves or looks, such as your preferred language or the region you are in.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website
            by collecting and reporting information anonymously.
          </li>
          <li>
            <strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites. The intention
            is to display ads that are relevant and engaging for the individual user.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Types of Cookies We Use</h2>
        <p>
          <strong>Session Cookies:</strong> These cookies are temporary and are deleted from your device when you close
          your web browser.
        </p>
        <p>
          <strong>Persistent Cookies:</strong> These cookies remain on your device until they expire or you delete them.
          They help us recognize you as an existing user.
        </p>
        <p>
          <strong>First-Party Cookies:</strong> These cookies are set by Shop Amour.
        </p>
        <p>
          <strong>Third-Party Cookies:</strong> These cookies are set by third parties, such as analytics and
          advertising partners.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Managing Cookies</h2>
        <p>Most web browsers allow you to control cookies through their settings. You can:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Delete all cookies</li>
          <li>Block all cookies</li>
          <li>Allow all cookies</li>
          <li>Block third-party cookies</li>
          <li>Clear all cookies when you close the browser</li>
          <li>Open a 'private browsing' / 'incognito' session</li>
          <li>Install add-ons and plugins to extend browser functionality</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Consequences of Disabling Cookies</h2>
        <p>
          If you choose to disable cookies, you may not be able to use some features of our website. Some cookies are
          essential for the website to function properly, so disabling them may impact your experience and make some
          services unavailable.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to This Cookie Policy</h2>
        <p>
          We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie
          Policy on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
        <p>If you have any questions about this Cookie Policy, please contact us at cookies@shopamour.com.</p>
      </div>

      <div className="mt-12 flex justify-center">
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}
