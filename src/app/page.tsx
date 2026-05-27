import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Bio } from "@/components/sections/Bio";
import { Footer } from "@/components/Footer";
import { About } from "@/components/sections/About";
import { Content } from "@/components/sections/Content";
import { StructuredData } from "@/components/StructuredData";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Diagnostico } from "@/components/sections/Diagnostico";

export default function Home() {
  return (
    <>
      {/* <LoadingSkeleton /> */}
      <StructuredData />
      <Breadcrumbs />
      <Navigation />
      <main className='text-gray-900'>
        <Hero />
        <About />
        <Services />
        <Diagnostico />
        {/* Seção Instagram */}
        <section id='insta' className='py-20 px-6 md:px-12 bg-white'>
          <div className='max-w-6xl mx-auto'>
            <InstagramFeed />
          </div>
        </section>

        <Bio />
        <Content />
      </main>
      {/* <IntelligentChatbot /> */}
      <Footer />
    </>
  );
}
