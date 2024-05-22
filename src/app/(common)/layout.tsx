"use client";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
