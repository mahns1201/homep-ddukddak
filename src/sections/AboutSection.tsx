import Image from "next/image";
import Button from "../components/ui/Button";
import SectionTitle from "../components/ui/SectionTitle";

export default function AboutSection() {
  return (
    <section className="py-24 bg-light-gray">
      <div className="max-w-6xl mx-auto px-6 flex flex-col tablet:flex-row items-center gap-16">
        <div className="flex-1">
          <SectionTitle
            label="Who We Are"
            title="A Team Passionate About Digital Excellence"
            description="Founded in 2014, Horizon has grown from a small design studio into a full-service digital agency trusted by companies worldwide. We combine creative thinking with technical expertise to deliver solutions that truly make a difference."
          />
          <ul className="mt-8 flex flex-col gap-3">
            {[
              "10+ years of industry experience",
              "200+ successful projects delivered",
              "Offices in Seoul, Singapore, and London",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-deep-gray">
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
            <Button href="/about">Learn Our Story</Button>
          </div>
        </div>

        <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-lg aspect-[4/3] relative">
          <Image src="/images/about-office.svg" alt="Our office" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
