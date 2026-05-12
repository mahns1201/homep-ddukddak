import Image from "next/image";
import SectionTitle from "../components/ui/SectionTitle";
import teamData from "../data/team.json";

export default function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          label={teamData.sectionLabel}
          title={teamData.sectionTitle}
          description={teamData.sectionDescription}
          center
        />

        <div className="mt-14 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-8">
          {teamData.members.map((member) => (
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
  );
}
