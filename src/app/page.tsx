import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Bio } from "@/components/Bio";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Content } from "@/components/Content";
import { StructuredData } from "@/components/StructuredData";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { InteractiveSection } from "@/components/InteractiveSection";
import { IntelligentChatbot } from "@/components/IntelligentChatbot";

export default function Home() {
  return (
    <>
      <LoadingSkeleton />
      <CustomCursor />
      <StructuredData />
      <Breadcrumbs />
      <Navigation />
      <main className='text-gray-900'>
        <Hero />
        <About />
        <Services />
        <InteractiveSection />
        <Bio />
        <Content />
      </main>
      <IntelligentChatbot />
      <Footer />
    </>
  );
}
