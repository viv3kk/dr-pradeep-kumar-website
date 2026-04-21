import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Promise } from "@/components/sections/Promise";
import { Testimonials } from "@/components/sections/Testimonials";
import { Connect } from "@/components/sections/Connect";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero — doctor intro + social proof + illustration */}
        <Hero />

        {/* 2. Trust strip — hospital affiliations */}
        <TrustStrip />

        {/* 3. About — education timeline + specialisations */}
        <About />

        {/* 4. Services — 6 condition cards + procedures */}
        <Services />

        {/* 5. How it works — 3-step patient journey */}
        <HowItWorks />

        {/* 6. Promise — values + stats banner */}
        <Promise />

        {/* 7. Testimonials — 6 patient stories */}
        <Testimonials />

        {/* 8. Book / Connect — form + clinic info + map */}
        <Connect />

        {/* 9. FAQ — accordion */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
