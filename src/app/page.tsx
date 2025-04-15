import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Bio } from "@/components/Bio";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Content } from "@/components/Content";

export default function Home() {
  return (
    <main className="text-gray-900">
      <Hero />
      <About />
      <Services />
      <Bio />
      <Content />
      <Footer />
    </main>
  );
}
