import Image from "next/image";
import SectionTitle from "../components/ui/SectionTitle";
import StatsSection from "../sections/StatsSection";
import CTASection from "../sections/CTASection";
import aboutPageData from "../data/about-screen.json";

export default function AboutScreen() {
  return (
    <>
      <section className="py-24 bg-gray-3 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <SectionTitle
            label={aboutPageData.hero.label}
            title={aboutPageData.hero.title}
            description={aboutPageData.hero.description}
            center
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle label={aboutPageData.section1.label} title={aboutPageData.section1.title} center />
          <div className="mt-14 grid grid-cols-1 tablet:grid-cols-3 gap-8">
            {aboutPageData.section1.items.map((value) => (
              <div key={value.title} className="p-8 rounded-2xl bg-gray-3">
                <h3 className="t3 text-gray-9 mb-3">{value.title}</h3>
                <p className="p4 text-gray-5">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            label={aboutPageData.section2.sectionLabel}
            title={aboutPageData.section2.sectionTitle}
            description={aboutPageData.section2.sectionDescription}
            center
          />

          <div className="mt-14 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-8">
            {aboutPageData.section2.members.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <p className="p2 text-gray-9">{member.name}</p>
                <p className="p4 text-gray-5 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
