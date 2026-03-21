import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Storia from "@/components/Storia";
import MenuList from "@/components/MenuList";
import Galleria from "@/components/Galleria";
import DoveSiamo from "@/components/DoveSiamo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-boutique-bg)]">
      <Navbar />
      <Hero />
      <Storia />
      <MenuList />
      <Galleria />
      <DoveSiamo />
      <Footer />
    </main>
  );
}
