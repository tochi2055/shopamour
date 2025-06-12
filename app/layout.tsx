import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientRootLayout } from "./client-layout";
import { AuthProvider } from "@/components/auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop Amour",
  description: "A modern shopping experience with full user experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientRootLayout>
          <AuthProvider>{children}</AuthProvider>
        </ClientRootLayout>
      </body>
    </html>
  );
}
