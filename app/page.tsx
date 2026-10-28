import fs from "node:fs";
import path from "node:path";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import About from "@/components/about";
import Work from "@/components/work";
import Services from "@/components/services";
import Journey from "@/components/journey";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  // public/hero.png (a generated render) wins if present, otherwise the bundled hero.svg illustration
  const heroSrc = fs.existsSync(path.join(process.cwd(), "public", "hero.png")) ? "/hero.png" : "/loader.png";

  return (
    <main>
      <Hero src={heroSrc} />
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
