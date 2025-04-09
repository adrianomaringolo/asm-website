import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Bio } from "@/components/Bio";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="text-gray-900">
      <Hero />
      <Services />
      <Bio />
      <Footer />
    </main>
  );
}
