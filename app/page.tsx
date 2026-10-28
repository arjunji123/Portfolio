import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import About from "@/components/about";
import Work from "@/components/work";
import Services from "@/components/services";
import Journey from "@/components/journey";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero src="/hero.png" />
      <Marquee />
      <About />
      <Work />
      <Services />
      <Journey />
      <Skills />
      <Contact />
    </main>
  );
}
