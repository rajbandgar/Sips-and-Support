import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me A Chai - Fund your projects with chai",
  description: "This website is a crowdfunding platform for creators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-black text-white font-sans">
        <SessionWrapper>
          {/* Navbar */}
          <Navbar />

          {/* Main content area */}
          <main className="min-h-screen bg-black bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
