import Image from "next/image";
import SectionTitle from "../components/ui/SectionTitle";

const team = [
  { name: "Sarah Kim", role: "CEO & Founder", image: "/images/team-sarah.svg" },
  { name: "James Park", role: "CTO", image: "/images/team-james.svg" },
  { name: "Emily Chen", role: "Design Lead", image: "/images/team-emily.svg" },
  { name: "Michael Lee", role: "Head of Engineering", image: "/images/team-michael.svg" },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          label="Our Team"
          title="The People Behind Horizon"
          description="A diverse team of strategists, designers, and engineers united by a shared passion for great work."
          center
        />

        <div className="mt-14 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <p className="font-semibold text-black">{member.name}</p>
              <p className="text-sm text-gray mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
