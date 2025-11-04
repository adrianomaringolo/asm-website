import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Bio } from "@/components/sections/Bio";
import { Footer } from "@/components/Footer";
import { About } from "@/components/sections/About";
import { Content } from "@/components/sections/Content";
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
      {/* <LoadingSkeleton /> */}
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
