import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UpgradetoJS | JavaScript Development Agency",
  description:
    "Have old unoptimized code? Upgrade your code to modern standards and dive deep into the world of Performance and Optimization. Don't worry we will do all the things for you at minimal price!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <section className="max-w-6xl mx-auto">
            <Navbar />
            {children}
            <Analytics />
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
