import "./globals.css";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/components/header";
import Preloader from "@/components/preloader";
import SmoothScroll from "@/components/smooth-scroll";

const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const display = Inter_Tight({ subsets: ["latin"], weight: ["300", "500", "800"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "Arjun S Naruka — Full Stack Developer",
  description:
    "Full stack developer who takes products from idea to production — frontend, backend, databases, mobile apps and deployment. Currently at LookoutAI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${body.variable} ${display.variable} ${mono.variable} relative overflow-x-hidden bg-paper font-sans text-ink`}
      >
        <Preloader />
        <SmoothScroll />
        <Header />
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#0a0a0a",
              color: "#fff",
              borderRadius: "999px",
              fontSize: "14px",
            },
          }}
        />
      </body>
    </html>
  );
}
