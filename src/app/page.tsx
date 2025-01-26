import Hero from "@/app/hero/page";
import About from "@/app/about/page";
import Contact from "@/app/contact/page";
import Projects from "@/app/projects/page";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="w-full h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Additional sections (optional) */}
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* Add other sections directly here if needed */}
    </main>
  );
}
