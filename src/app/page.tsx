import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Extensions from '@/components/Extensions';
import AISection from '@/components/AISection';
import Testimonials from '@/components/Testimonials';
import Automation from '@/components/Automation';
import { Tagline, Community, Developers, CTA, Footer } from '@/components/Sections';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Tagline />
      <Extensions />
      <AISection />
      <Testimonials />
      <Automation />
      <Community />
      <Developers />
      <CTA />
      <Footer />
    </>
  );
}
