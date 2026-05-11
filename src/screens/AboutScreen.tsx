import Image from "next/image";
import SectionTitle from "../components/ui/SectionTitle";
import StatsSection from "../sections/StatsSection";
import TeamSection from "../sections/TeamSection";
import CTASection from "../sections/CTASection";

export default function AboutScreen() {
  return (
    <>
      {/* Page Hero */}
      <section className="py-24 bg-light-gray">
        <div className="max-w-6xl mx-auto px-6 flex flex-col tablet:flex-row items-center gap-16">
          <div className="flex-1">
            <SectionTitle
              label="Our Story"
              title="Built on a Belief That Technology Should Empower People"
              description="Horizon was founded in 2014 with a simple idea: technology should make life better. Today, we are a global team of 80+ people working with leading companies across industries."
            />
          </div>
          <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-lg aspect-[4/3] relative">
            <Image src="/images/about-story.svg" alt="Our story" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle label="Our Values" title="What We Stand For" center />
          <div className="mt-14 grid grid-cols-1 tablet:grid-cols-3 gap-8">
            {[
              {
                title: "People First",
                description: "We build tools for humans, not metrics. User experience is never an afterthought.",
              },
              {
                title: "Radical Transparency",
                description: "Honest communication, clear timelines, and no surprises. Always.",
              },
              {
                title: "Continuous Improvement",
                description: "We ship, learn, and iterate. Good enough is never enough.",
              },
            ].map((value) => (
              <div key={value.title} className="p-8 rounded-2xl bg-light-gray">
                <h3 className="text-lg font-semibold text-black mb-3">{value.title}</h3>
                <p className="text-gray text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <TeamSection />
      <CTASection />
    </>
  );
}
