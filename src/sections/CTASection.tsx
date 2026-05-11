import Button from "../components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-24 bg-light-gray">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-black mb-4">Ready to Start Your Project?</h2>
        <p className="text-gray text-lg leading-relaxed mb-10">
          Let us talk about how Horizon can help you build something great.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact" size="lg">
            Get in Touch
          </Button>
          <Button href="/services" variant="outline" size="lg">
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
}
