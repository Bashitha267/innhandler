import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProcessSection from "./components/ProcessSection";
import AllInOneSection from "./components/AllInOneSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Header & Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Single Screen Viewport Hero Section */}
        <HeroSection />

        {/* 2. Process Section: How We Get You There */}
        <ProcessSection />

        {/* 3. All-in-One Solution Summary Section: Manage Smarter Grow Faster */}
        <AllInOneSection />

        {/* 4. Frequently Asked Questions Accordion Section */}
        <FaqSection />
      </main>

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}
