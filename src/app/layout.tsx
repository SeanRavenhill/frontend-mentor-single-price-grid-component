import type { Metadata } from "next";
import { karla } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor - Starter",
  description: "Revised after create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karla.className} antialiased`}>{children}</body>
    </html>
  );
}
