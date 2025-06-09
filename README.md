
# 🛍️ ShopX (ShopAmour)

**ShopX** is a lightweight e-commerce storefront built with Next.js + React, featuring product listings, user authentication, cart logic, Stripe payments, responsive design, and dark mode support.

## 🎯 Key Skills / Tech Stack

* **Next.js** + React – Server-side rendering & routing
* **Stripe API** – Secure checkout integration
* **Sanity.io** *(or Contentful)* – CMS for managing product data
* **Tailwind CSS** – Utility-first styling
* **Context API** *(or Redux)* – Cart & global state management
* **External API fetching** – Real-time product data from CMS
* **Responsive UI** – Mobile-first design with dark/light mode toggle

---

## ⚙️ Core Features

1. **Product Listing**
   Fetches product data from a headless CMS and displays them with images, pricing, and descriptions.

2. **User Authentication**
   Enables users to sign up, log in, and view order history *(e.g., via NextAuth.js or custom JWT)*.

3. **Cart Management**
   Add, remove, or adjust products in cart (frontend CRUD via Context/Redux).

4. **Stripe Checkout**
   Integrates Stripe API for secure, seamless payment flow.

5. **Dark Mode Toggle**
   Supports both light and dark themes, stored in local storage or React context.

6. **Responsive Design**
   Fully responsive—mobile, tablet, and desktop optimized via Tailwind CSS.

---

## 🧩 Installation & Setup

##  1. Clone the Repo

```bash
git clone https://github.com/tochi2055/shopamour.git
cd shopamour
```

## 2. Install Dependencies

```bash
npm install
# or
yarn install
```

##  3. Environment Variables

Create a `.env.local` file in the root and add:

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
CMS_PROJECT_ID=your-sanity-project-id
CMS_DATASET=production
NEXTAUTH_SECRET=your-random-secret
NEXTAUTH_URL=http://localhost:3000
```

##  4. Set Up CMS

* For **Sanity.io**:

  1. Run `sanity init` in your CMS folder.
  2. Define schemas for products (name, slug, img, price, description).
  3. Deploy dataset and confirm `projectId` & `dataset` match `.env.local`.

* For **Contentful**:

  1. Create a Space, setup Content model “Product” (fields: name, slug, price, img, desc).
  2. Add entries and copy the Content Delivery API token to `.env.local`.

##  5. Configure Stripe

Log in to [Stripe Dashboard](https://dashboard.stripe.com/), then:

* Enable **Test Mode**, copy the publishable and secret keys.
* Create a webhook for `checkout.session.completed` and add it to `.env.local`.

##  6. Run Locally

```bash
npm run dev
# or
yarn dev
```

Browse to `http://localhost:3000`

##  7. Build for Production

```bash
npm run build
npm start
```

Ensure `.env.production` has correct variables.

---

#  🧪 Running Tests (Optional)

If tests exist:

```bash
npm test
# or
yarn test
```

---

# 📦 Deployment

* **Vercel** (recommended):

  1. Connect GitHub repo.
  2. Add environment variables in project settings.
  3. Deploy — Vercel auto-builds and previews.

* **Netlify**:

  1. Set build command to `npm run build && npm start`.
  2. Configure environment variables.
  3. Deploy following Netlify’s instructions.

---
# Screenshot 
![image](https://github.com/user-attachments/assets/97d2a629-4d1a-4699-942c-5050b04c76ce)

![image](https://github.com/user-attachments/assets/e39a6dc5-d7d8-41af-9fc3-3b7736567d0e)
![image](https://github.com/user-attachments/assets/5b19197f-fd6b-42ba-a2a0-ea8f545e79a0)
![image](https://github.com/user-attachments/assets/7fff9077-d36e-4b4b-ac22-17dba7c7a450)
![image](https://github.com/user-attachments/assets/c82899d1-d841-48d9-8c17-7f74728f5002)
![image](https://github.com/user-attachments/assets/4a8d0f2a-5fbd-41b5-b06e-9541bf2e7555)
![image](https://github.com/user-attachments/assets/d4ee05e2-a751-4d62-a603-4eb4e76a2303)
![image](https://github.com/user-attachments/assets/f59cc6d7-d11b-4742-86b3-b03ce5c5a070)
![image](https://github.com/user-attachments/assets/10979fba-b8a6-4641-909e-35dcbef63c17)


---
## 🧭 Usage Tips

* **Browse:** Navigate product pages and explore details.
* **Add to Cart:** Select quantity and add.
* **Auth:** Sign up / Log in to access checkout or order history.
* **Checkout:** Secure payment via Stripe.
* **Theme Toggle:** Use icon to switch between dark/light mode—preference is remembered.
* **View Orders:** Authenticated users can review past orders.

---

##  🪄 Contributing

Your feedback and contributions are welcome! Here’s how to get involved:

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Commit your changes: `git commit -m "feat: add new feature"`
4. Push to your branch: `git push origin feat/my-feature`
5. Open a Pull Request

Please ensure:

* ✅ Code is clean and well-commented
* ✅ Matches project styling (ESLint, Prettier)
* ✅ Relevant tests are included

---

## 📄 License

This project is licensed under the **\[MIT License]**(LICENSE).

---

## 🙌 Acknowledgements

* Sanity.io / Contentful – for providing flexible CMS
* Stripe – for seamless payment integration
* Tailwind CSS – for rapid and beautiful UI
* NextAuth.js (or your chosen auth library) – for elegant auth flows

---

## ❓ FAQs

**Q:** Can I use Contentful instead of Sanity?
**A:** Yes—just swap the CMS client and update `.env.local` accordingly.

**Q:** How do I customize payment flows?
**A:** Extend Stripe checkout sessions in `/api/create-checkout-session.js` to add shipping, coupons, etc.

**Q:** How do I store order history?
**A:** Create an orders collection in your CMS or a separate database (e.g., Firestore, MongoDB) and save order sessions after successful payment.






