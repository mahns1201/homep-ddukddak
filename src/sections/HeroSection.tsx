import Image from "next/image";
import Button from "../components/ui/Button";
import heroData from "../data/hero.json";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-150 flex items-center">
      <Image
        src="https://images.unsplash.com/photo-1569322977266-acff659212fd?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gray-9/70" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <p className="t3 text-white tracking-widest mb-4">{heroData.tagline}</p>
        <h1 className="t1 text-white mb-6 max-w-3xl">{heroData.heading}</h1>
        <p className="p1 text-white max-w-xl mb-10">{heroData.description}</p>
      </div>
    </section>
  );
}
