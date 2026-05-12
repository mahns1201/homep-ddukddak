import Image from "next/image";
import Button from "../components/ui/Button";
import heroData from "../data/hero.json";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      <Image src="/images/hero-workspace.svg" alt="Hero background" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <p className="p5 text-secondary uppercase tracking-widest mb-4">{heroData.tagline}</p>
        <h1 className="t1 text-white mb-6 max-w-3xl">{heroData.heading}</h1>
        <p className="p1 text-white/75 max-w-xl mb-10">{heroData.description}</p>
        <div className="flex flex-wrap gap-4">
          <Button href={heroData.primaryButtonHref} variant="primary" size="lg">
            {heroData.primaryButtonText}
          </Button>
          <Button href={heroData.secondaryButtonHref} variant="white" size="lg">
            {heroData.secondaryButtonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
