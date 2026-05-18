import Image from "next/image";
import StatsSection from "../sections/StatsSection";
import CTASection from "../sections/CTASection";
import Carousel from "../components/ui/Carousel";
import homeScreenData from "../data/home-screen.json";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import { iconMap } from "../components/ui/icons";
import servicesScreenData from "../data/services-screen.json";

export default function HomeScreen() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-150 flex items-center">
        <Carousel images={homeScreenData.hero.images} />
        <div className="absolute inset-0 bg-gray-9/80" />

        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <p className="t3 text-white tracking-widest mb-4">{homeScreenData.hero.tagline}</p>
          <h1 className="t1 text-white mb-6 max-w-3xl">{homeScreenData.hero.heading}</h1>
          <p className="p1 text-white max-w-xl mb-10">{homeScreenData.hero.description}</p>
        </div>
      </section>

      {/* 철학 소개 */}
      <section className="py-24 bg-gray-3">
        <div className="max-w-6xl mx-auto px-6 flex flex-col tablet:flex-row items-center gap-16">
          <div className="flex-1">
            <SectionTitle
              label={homeScreenData.about.sectionLabel}
              title={homeScreenData.about.sectionTitle}
              description={homeScreenData.about.description}
            />
            <ul className="mt-8 flex flex-col gap-3">
              {homeScreenData.about.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 p4 text-gray-7">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/about">{homeScreenData.about.buttonText}</Button>
            </div>
          </div>

          <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-lg aspect-4/3 relative">
            <Image src="/images/about-1.png" alt="about-1" fill className="object-cover" />
          </div>
        </div>
      </section>

      <StatsSection />

      {/* 서비스 소개 */}
      <section className="py-24 bg-white">
        <SectionTitle
          label={servicesScreenData.section1.sectionLabel}
          title={servicesScreenData.section1.sectionTitle}
          description={servicesScreenData.section1.sectionDescription}
          center
        />

        <div className="max-w-6xl mx-auto px-6">
          <div className="mt-14 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-8">
            {servicesScreenData.section1.items.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl border border-gray-5/10 hover:shadow-md transition-shadow bg-white"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  {iconMap[item.icon]}
                </div>
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
