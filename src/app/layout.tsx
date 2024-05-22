import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/../public/sass/main.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aihire - AI & Data Science Freelance Hiring Platform Nextjs Template",
  description: "Made with nextjs bootstrap 5 & Sass",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
