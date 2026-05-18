import SectionTitle from "../components/ui/SectionTitle";
import CTASection from "../sections/CTASection";
import servicesScreenData from "../data/services-screen.json";
import { iconMap } from "../components/ui/icons";

export default function ServicesScreen() {
  return (
    <>
      <section className="py-24 bg-gray-3 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <SectionTitle
            label={servicesScreenData.hero.label}
            title={servicesScreenData.hero.title}
            description={servicesScreenData.hero.description}
            center
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            label={servicesScreenData.section1.sectionLabel}
            title={servicesScreenData.section1.sectionTitle}
            description={servicesScreenData.section1.sectionDescription}
            center
          />

          <div className="mt-14 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-8">
            {servicesScreenData.section1.items.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl border border-gray-5/10 hover:shadow-md transition-shadow bg-white"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  {iconMap[service.icon]}
                </div>
                <h3 className="t3 text-gray-9 mb-3">{service.title}</h3>
                <p className="p4 text-gray-5">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-3">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            label={servicesScreenData.section2.label}
            title={servicesScreenData.section2.title}
            description={servicesScreenData.section2.description}
            center
          />
          <div className="mt-14 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-8">
            {servicesScreenData.section2.steps.map((item) => (
              <div key={item.step} className="relative">
                <p className="t1 text-primary/20 mb-4">{item.step}</p>
                <h3 className="t3 text-gray-9 mb-3">{item.title}</h3>
                <p className="p4 text-gray-5">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            label={servicesScreenData.section3.label}
            title={servicesScreenData.section3.title}
            description={servicesScreenData.section3.description}
            center
          />
          <div className="mt-14 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-8">
            {servicesScreenData.section3.steps.map((item) => (
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
