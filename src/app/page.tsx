import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Bio } from "@/components/Bio";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Content } from "@/components/Content";
import { StructuredData } from "@/components/StructuredData";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Breadcrumbs />
      <Navigation />
      <main className='text-gray-900'>
        <Hero />
        <About />
        <Services />
        <Bio />
        <Content />
      </main>
      <Footer />
    </>
  );
}
