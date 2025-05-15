import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RefundPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Refund Policy</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Returns and Refunds</h2>
        <p>
          At Shop Amour, we want you to be completely satisfied with your purchase. If you're not satisfied, we offer a
          straightforward return and refund policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Eligibility for Returns</h2>
        <p>To be eligible for a return, your item must be:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Unused and in the same condition that you received it</li>
          <li>In the original packaging</li>
          <li>Returned within 30 days of the delivery date</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Non-Returnable Items</h2>
        <p>The following items cannot be returned:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Digital products</li>
          <li>Gift cards</li>
          <li>Perishable goods</li>
          <li>Intimate or sanitary goods</li>
          <li>Hazardous materials</li>
          <li>Items marked as final sale</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Return Process</h2>
        <p>To initiate a return:</p>
        <ol className="list-decimal pl-6 mb-6">
          <li>Log in to your Shop Amour account</li>
          <li>Go to your order history</li>
          <li>Select the order containing the item you want to return</li>
          <li>Click on "Return Item" and follow the instructions</li>
          <li>Print the return shipping label (if provided)</li>
          <li>Package the item securely with all included accessories and documentation</li>
          <li>Attach the return shipping label to the package</li>
          <li>Drop off the package at the designated shipping carrier</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Refund Timeline</h2>
        <p>Once we receive your returned item, we will inspect it and notify you of the status of your refund.</p>
        <p>
          If your return is approved, we will initiate a refund to your original method of payment. The time it takes
          for the refund to appear in your account depends on your payment provider's processing time, typically 5-10
          business days.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Shipping Costs</h2>
        <p>
          The customer is responsible for return shipping costs unless the item is defective or damaged upon receipt.
        </p>
        <p>
          If you receive a refund, the cost of return shipping will be deducted from your refund unless the return is
          due to our error.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Damaged or Defective Items</h2>
        <p>
          If you receive a damaged or defective item, please contact our customer service team immediately. We will
          provide instructions for returning the item and will cover the return shipping costs.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Exchanges</h2>
        <p>
          We do not process exchanges directly. If you want to exchange an item, please return the original item for a
          refund and place a new order for the desired item.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
        <p>If you have any questions about our Refund Policy, please contact us at refunds@shopamour.com.</p>
      </div>

      <div className="mt-12 flex justify-center">
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}
