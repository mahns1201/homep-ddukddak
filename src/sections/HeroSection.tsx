import Carousel from "../components/ui/Carousel";
import heroData from "../data/hero.json";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-150 flex items-center">
      <Carousel images={heroData.images} />
      <div className="absolute inset-0 bg-gray-9/80" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <p className="t3 text-white tracking-widest mb-4">{heroData.tagline}</p>
        <h1 className="t1 text-white mb-6 max-w-3xl">{heroData.heading}</h1>
        <p className="p1 text-white max-w-xl mb-10">{heroData.description}</p>
      </div>
    </section>
  );
}
