import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuList from "@/components/MenuList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-boutique-bg)]">
      <Navbar />
      <Hero />
      <MenuList />
      <Footer />
    </main>
  );
}
