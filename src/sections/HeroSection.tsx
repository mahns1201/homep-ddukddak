import Image from "next/image";
import Button from "../components/ui/Button";
import heroData from "../data/hero.json";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      <Image src="/images/hero-workspace.svg" alt="Hero background" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">{heroData.tagline}</p>
        <h1 className="text-4xl tablet:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
          {heroData.heading}
        </h1>
        <p className="text-white/75 text-lg tablet:text-xl max-w-xl leading-relaxed mb-10">
          {heroData.description}
        </p>
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
