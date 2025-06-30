
# 📦 E-commerce Product Listing Page

A fully responsive, modern e-commerce product listing app built with **Next.js**. This app showcases products using a grid layout, supports live **search**, **category filtering**, a **detail modal**, an optional **shopping cart**, and a **mock add-product form**.

Live Demo: [🔗 Deployed on Vercel](#)

---

## 🖼️ Features

- 🔍 **Search Products** by name (client-side)
- 🎯 **Filter by Category** (from Fake Store API)
- 📦 **Product Grid** with image, title, price, and description
- 🪟 **Product Modal** with full detail view
- ➕ **Mock Add Product** form using React Hook Form + Zod
- 🛒 **Shopping Cart** (Zustand state, floating cart icon)
- 🌐 **Data Fetched** with React Query
- 💾 **Global State** managed using Zustand

---

## 🚀 Tech Stack

| Tool              | Purpose                            |
|-------------------|-------------------------------------|
| **Next.js**       | React framework                     |
| **Tailwind CSS**  | Utility-first styling               |
| **React Query**   | Data fetching and caching           |
| **Zustand**       | Global state management             |
| **React Hook Form** | Form handling                     |
| **Zod**           | Form validation                     |
| **Fake Store API**| Product data source                 |

---

## 🔗 API Endpoints (Fake Store API)

- All Products: `https://fakestoreapi.com/products`
- All Categories: `https://fakestoreapi.com/products/categories`
- Products by Category: `https://fakestoreapi.com/products/category/{category}`
- Single Product: `https://fakestoreapi.com/products/{id}`

---

## 📁 Folder Structure

```
ecommerce-app/
├── pages/
│   └── index.tsx            # Home page
├── components/
│   ├── ProductCard.tsx
│   ├── ProductModal.tsx
│   ├── ProductForm.tsx
│   ├── SearchFilter.tsx
│   └── CartIcon.tsx
├── store/
│   └── store.ts             # Zustand state
├── styles/
│   └── globals.css
├── public/
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🧪 Run the Project Locally

### 1. Clone the repo

```bash
git clone https://github.com/your-username/ecommerce-app.git
cd ecommerce-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open your browser: [http://localhost:3000](http://localhost:3000)

---

## ✍️ Add Product (Mock Only)

The Add Product form is purely client-side (mock):
- Simulates form submission
- Validated using Zod
- Adds product to the grid (no backend storage)

---

## 📦 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow prompts to deploy your app live.

---

## 📜 License

This project is open-source and free to use.
