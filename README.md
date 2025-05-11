☕ SipsandSupport
SipsandSupport is a modern full-stack web application that enables creators, artists, and developers to receive financial support from their audience in the form of “sips” (like buying a coffee). Inspired by platforms like Buy Me a Coffee and Patreon, it allows creators to build public support pages, manage income, and securely accept payments using Razorpay.

Built with Next.js, NextAuth.js, MongoDB, and Razorpay, it offers secure login, fast performance, and a personalized experience for both supporters and creators.

✨ Features
🔐 Authentication
Secure user authentication via NextAuth.js

Supports email/password and OAuth (if enabled)

Sessions stored in MongoDB for scalability and persistence

💼 Creator Dashboard
Set up your public creator page with name, image, bio, social links, and custom message

Track total support, recent transactions, and earnings overview

Manage and update Razorpay API credentials for personalized payouts

💳 Payment Integration
Seamless and secure one-time payments via Razorpay

Dynamic key-based transactions: each creator uses their own Razorpay credentials

Real-time success/failure status and transaction logging

🎁 Support Flow
Anyone can visit a creator’s public page and send a “sip”

Option to leave a message of encouragement with their support

Instant confirmation and thank-you messages

⚙️ Backend Functionality
Built with Next.js API Routes acting as the backend

Uses MongoDB with Mongoose for flexible data storage

Razorpay SDK integration for secure server-side processing

Input validation and protected routes for sensitive operations

🧰 Tech Stack
Frontend: Next.js (React), Tailwind CSS

Backend/API: Next.js API Routes, Razorpay SDK

Authentication: NextAuth.js (with MongoDB adapter)

Database: MongoDB (via Mongoose)

Payment Gateway: Razorpay

State Management: React Context + Hooks

🔮 Future Enhancements
Add recurring monthly subscriptions for supporters

Email notifications for successful support

Creator analytics: revenue trends, support stats, etc.

Admin dashboard for platform-wide insights

Mobile-first UI improvements and PWA support

🤝 Contributing
Contributions are welcome and appreciated!

Fork the repository

Create a new feature branch: git checkout -b feature/your-feature

Make your changes and commit: git commit -m "Add new feature"

Push to GitHub: git push origin feature/your-feature

Open a Pull Request