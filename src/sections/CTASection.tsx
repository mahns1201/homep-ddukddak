import Button from "../components/ui/Button";
import ctaData from "../data/cta.json";

export default function CTASection() {
  return (
    <section className="py-24 bg-light-gray">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="t2 text-black mb-4">{ctaData.heading}</h2>
        <p className="p1 text-gray mb-10">{ctaData.description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={ctaData.primaryButtonHref} size="lg">
            {ctaData.primaryButtonText}
          </Button>
          <Button href={ctaData.secondaryButtonHref} variant="outline" size="lg">
            {ctaData.secondaryButtonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
