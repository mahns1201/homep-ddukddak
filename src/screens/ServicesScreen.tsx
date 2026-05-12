import SectionTitle from "../components/ui/SectionTitle";
import ServicesSection from "../sections/ServicesSection";
import CTASection from "../sections/CTASection";

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We start by understanding your goals, users, and constraints through workshops and research.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We define a clear roadmap, scope, and success metrics before writing a single line of code.",
  },
  {
    step: "03",
    title: "Design & Build",
    description: "Our designers and engineers work in tandem to deliver high-quality, tested solutions.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    description: "We support the launch and continue optimizing based on real user data and feedback.",
  },
];

export default function ServicesScreen() {
  return (
    <>
      {/* Page Hero */}
      <section className="py-24 bg-gray-3 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <SectionTitle
            label="Services"
            title="Everything You Need to Succeed Online"
            description="From initial strategy to ongoing support, we offer a full suite of digital services designed to help your business grow."
            center
          />
        </div>
      </section>

      <ServicesSection />

      {/* Process */}
      <section className="py-24 bg-gray-3">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            label="How We Work"
            title="Our Process"
            description="A proven four-step approach that delivers results every time."
            center
          />
          <div className="mt-14 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <p className="t1 text-primary/20 mb-4">{item.step}</p>
                <h3 className="t3 text-gray-9 mb-3">{item.title}</h3>
                <p className="p4 text-gray-5">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
