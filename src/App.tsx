import { Navbar } from '@/components/Navbar';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Training } from '@/sections/Training';
import { Coaching } from '@/sections/Coaching';
import { WhyLiftX } from '@/sections/WhyLiftX';
import { Journey } from '@/sections/Journey';
import { Motivation } from '@/sections/Motivation';
import { InstagramSection } from '@/sections/Instagram';
import { Contact } from '@/sections/Contact';
import { Location } from '@/sections/Location';
import { FinalCTA } from '@/sections/FinalCTA';
import { Footer } from '@/sections/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Training />
        <Coaching />
        <WhyLiftX />
        <Journey />
        <Motivation />
        <InstagramSection />
        <Contact />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
