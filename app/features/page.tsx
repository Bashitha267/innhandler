import Navbar from "../components/Navbar";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | InnHandler All-in-One Villa Management Platform",
  description:
    "Explore InnHandler features: Smart reservation calendar, housekeeping operations, activity tracking, multi-channel OTA sync, and cross-platform mobile access.",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      <main className="flex-1">
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
