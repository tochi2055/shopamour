

# 🛍️ ShopX (ShopAmour) – Lightweight, Scalable E-commerce Storefront

**License:** MIT
**Tech Stack:** Next.js · React · Stripe · Sanity.io · TailwindCSS · Vercel

---

## 🧠 The Problem

Modern e-commerce demands a **fast, flexible, and cost-effective** alternative to monolithic platforms like Shopify or Magento. Founders, indie developers, and small businesses struggle with:

* 💸 High subscription fees
* 🔒 Vendor lock-in
* ⚙️ Limited frontend customization
* 🐢 Slow page load times and SEO issues

---

## ✅ Our Solution

**ShopX (ShopAmour)** is a headless, performant, and fully customizable storefront for modern brands, optimized for conversion, speed, and developer freedom.

> Designed for teams building their **own brand**, **own experience**, and **own backend**.

---

## 🎯 Use Case & Ideal Fit

| Target User    | Use Case                                   |
| -------------- | ------------------------------------------ |
| Indie founders | Launching a modern online store quickly    |
| Agencies       | Delivering client-ready custom storefronts |
| Developers     | Needing full control of UI and API logic   |
| Content teams  | Managing catalog with headless CMS         |

---

## 🧩 Key Technologies

| Layer          | Tool / Stack           | Purpose                          |
| -------------- | ---------------------- | -------------------------------- |
| **Frontend**   | Next.js + React        | SEO-friendly, fast UI            |
| **State Mgmt** | Context API (or Redux) | Cart & global app state          |
| **Styling**    | Tailwind CSS           | Modern responsive design         |
| **Backend**    | Sanity.io / Contentful | Headless product data management |
| **Payments**   | Stripe                 | Secure, scalable checkout        |
| **Auth**       | NextAuth.js / JWT      | User sign-in, order history      |
| **Deployment** | Vercel / Netlify       | Auto-scaling CI/CD & hosting     |

---

## ⚙️ Core Features

1. 🛒 **Product Listing**

   * Pulls live data from CMS
   * Displays name, price, image, description

2. 👤 **User Authentication**

   * Login/signup via NextAuth or JWT
   * Tracks user sessions and protects checkout

3. 🧺 **Cart Management**

   * Add/remove/edit cart items
   * Persisted via local storage or global state

4. 💳 **Stripe Checkout**

   * Seamless, secure, mobile-optimized payment flow
   * Webhook-ready for order confirmation

5. 🌗 **Dark Mode**

   * Local storage remembers preference
   * Toggle UI built with Tailwind’s `dark` mode

6. 📱 **Mobile-First UX**

   * Works perfectly on all devices
   * Speed optimized & accessible

---

## 🖼️ Screenshots

| Storefront View                                                                            | Product Page                                                                               | Cart Page                                                                                  | Auth Flow                                                                                  | Stripe Checkout                                                                            |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| ![image1](https://github.com/user-attachments/assets/97d2a629-4d1a-4699-942c-5050b04c76ce) | ![image2](https://github.com/user-attachments/assets/e39a6dc5-d7d8-41af-9fc3-3b7736567d0e) | ![image3](https://github.com/user-attachments/assets/5b19197f-fd6b-42ba-a2a0-ea8f545e79a0) | ![image4](https://github.com/user-attachments/assets/7fff9077-d36e-4b4b-ac22-17dba7c7a450) | ![image5](https://github.com/user-attachments/assets/f59cc6d7-d11b-4742-86b3-b03ce5c5a070) |

---

## 🧱 Installation & Setup

### 1. Clone the Project

```bash
git clone https://github.com/tochi2055/shopamour.git
cd shopamour
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment

Create `.env.local`:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
CMS_PROJECT_ID=your-sanity-project-id
CMS_DATASET=production
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:3000
```

### 4. Set Up CMS

**Option A – Sanity.io**

```bash
cd studio
sanity init
```

* Define schemas: `name`, `slug`, `price`, `img`, `description`
* Deploy your dataset
* Ensure `.env.local` matches project ID

**Option B – Contentful**

* Create a "Product" model
* Define fields like name, slug, price, img, desc
* Add entries and grab your API token

### 5. Stripe Setup

* Go to [Stripe Dashboard](https://dashboard.stripe.com)
* Copy keys to `.env.local`
* Create webhook for `checkout.session.completed`

### 6. Start the App Locally

```bash
npm run dev
# or
yarn dev
```

Visit: [http://localhost:3000](http://localhost:3000)

### 7. Build for Production

```bash
npm run build
npm start
```

---

## 📦 Deployment Options

### ✅ Vercel (Recommended)

* Import GitHub repo
* Add environment variables
* Click **Deploy**

### 🔁 Netlify

* Use `npm run build && npm start` as build command
* Add environment variables in Netlify settings

---

## 🧪 Optional: Run Tests

If you've written tests:

```bash
npm test
# or
yarn test
```

---

## 🧭 Usage Guide

* **Browse products** → Navigate to product pages
* **Add to cart** → Adjust quantities in real-time
* **Sign up** → Unlock full checkout and order history
* **Checkout** → Use Stripe for secure payment
* **Switch theme** → Toggle between light/dark
* **Track orders** → Authenticated users can view past orders

---

## 🤝 Contributing

We welcome contributions!

### Steps:

1. Fork the repo
2. Create a branch: `git checkout -b feat/new-feature`
3. Make changes
4. Commit: `git commit -m "feat: added X"`
5. Push: `git push origin feat/new-feature`
6. Open a PR

✔ Please make sure:

* Code is clean and documented
* Follows project conventions
* Adds or updates relevant tests

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

* **Sanity.io / Contentful** – Headless CMS for dynamic product content
* **Stripe** – World-class payment infrastructure
* **NextAuth.js** – Authentication made easy
* **Tailwind CSS** – Fast styling with beautiful defaults

---

## ❓ FAQs

**Q:** Can I switch CMS?
**A:** Yes — just replace the CMS client and update `.env.local` accordingly.

**Q:** Where is order history stored?
**A:** Either in your CMS or a database (e.g., Firebase, MongoDB) via webhook handling.

**Q:** Can I add shipping and discounts?
**A:** Absolutely — extend `/api/create-checkout-session.js` with Stripe's rich APIs.

