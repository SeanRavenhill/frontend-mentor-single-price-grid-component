import type { Metadata } from "next";
import { karla } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor - Single price grid component",
  description: "A Frontend Mentor challenge project",
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
