import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p>
          Welcome to Shop Amour. These Terms of Service govern your use of our website and services. By accessing or
          using Shop Amour, you agree to be bound by these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Definitions</h2>
        <p>"Shop Amour" refers to our website, mobile applications, and services.</p>
        <p>
          "User", "You", and "Your" refers to you, the person accessing Shop Amour and accepting these Terms of Service.
        </p>
        <p>"We", "Us", and "Our" refers to Shop Amour.</p>
        <p>"Parties" refers to both you and us.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Account Registration</h2>
        <p>
          To use certain features of Shop Amour, you may be required to register for an account. You agree to provide
          accurate, current, and complete information during the registration process.
        </p>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and for all activities
          that occur under your account.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Conduct</h2>
        <p>
          You agree not to use Shop Amour for any illegal or unauthorized purpose. You agree to comply with all local
          laws regarding online conduct and acceptable content.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Products and Services</h2>
        <p>
          Shop Amour allows users to buy and sell products. We do not guarantee the quality, safety, or legality of
          items listed for sale.
        </p>
        <p>We reserve the right to remove any listing that violates our policies or applicable laws.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Payments and Fees</h2>
        <p>
          Shop Amour may charge fees for certain services. You agree to pay all fees and charges incurred in connection
          with your use of Shop Amour.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Intellectual Property</h2>
        <p>
          Shop Amour and its content, features, and functionality are owned by us and are protected by international
          copyright, trademark, patent, trade secret, and other intellectual property laws.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Termination</h2>
        <p>
          We may terminate or suspend your account and access to Shop Amour immediately, without prior notice or
          liability, for any reason.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Limitation of Liability</h2>
        <p>
          In no event shall Shop Amour be liable for any indirect, incidental, special, consequential, or punitive
          damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will provide notice of any material changes by
          posting the new Terms on Shop Amour.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at support@shopamour.com.</p>
      </div>

      <div className="mt-12 flex justify-center">
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}
