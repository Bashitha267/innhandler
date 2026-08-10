import Navbar from "../components/Navbar";
import SolutionsSection from "../components/SolutionsSection";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Hotel & Villa Web Development | InnHandler",
  description:
    "Custom modern, fast, and conversion-focused hotel & villa website development with direct booking engine integration and 100% SEO optimization.",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      <main className="flex-1">
        <SolutionsSection />
      </main>
      <Footer />
    </div>
  );
}
