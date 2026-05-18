import Button from "../components/ui/Button";
import ctaData from "../data/cta-section.json";

export default function CTASection() {
  return (
    <section className="py-24 bg-gray-3">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="t2 text-gray-9 mb-4">{ctaData.heading}</h2>
        <p className="p1 text-gray-5 mb-10">{ctaData.description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={ctaData.primaryButtonHref} size="lg">
            {ctaData.primaryButtonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
