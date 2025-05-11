# ☕ SipsandSupport

SipsandSupport is a modern full-stack web application that empowers creators, developers, and artists to receive support from their audience in the form of "sips" — a metaphor for buying them a coffee or showing appreciation. Inspired by platforms like **Buy Me a Coffee** and **Patreon**, it provides an intuitive way to fund creative work through one-time payments.

This project is built using **Next.js**, **NextAuth.js**, **MongoDB**, and **Razorpay**, providing secure user authentication, a custom dashboard, and real-time Razorpay payment handling for creators to monetize their passion with full control over the process.

---

## ✨ Features

### 🔐 Authentication
- Fully secure authentication using **NextAuth.js**
- Session management via JWT or database (MongoDB Adapter)
- Email and password-based login support (OAuth-ready)

### 💼 Creator Dashboard
- Personalized profile with name, image, bio, and social links
- Display public support page with donation message and form
- Update Razorpay API credentials directly from dashboard
- View donation stats and earnings history

### 💳 Payment Integration
- Seamless integration with **Razorpay** payment gateway
- Each creator uses their own Razorpay API keys for direct support
- Real-time transaction status and updates
- Custom amount support with optional support message

### 🌐 Public Support Pages
- Each creator has a unique public page (`/username`)
- Visitors can send sips with optional notes of encouragement
- Friendly and simple UX for non-technical supporters

### 🔒 Backend & Database
- API routes for securely handling Razorpay requests
- Creator and supporter data stored in MongoDB
- Mongoose used for schema definitions and validations
- Environment-based Razorpay config for flexible testing and deployment

---

## 🛠️ Tech Stack

- **Frontend**: Next.js (React), Tailwind CSS
- **Backend/API**: Next.js API Routes
- **Authentication**: NextAuth.js with MongoDB Adapter
- **Database**: MongoDB with Mongoose
- **Payments**: Razorpay SDK & Checkout
- **State Management**: React Context + Hooks
- **Deployment**: Vercel (or any Node-compatible host)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/rajbandgar/Sips-and-Support.git
cd Sips-and-Support
