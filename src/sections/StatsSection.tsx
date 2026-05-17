import statsData from "../data/stats-section.json";

export default function StatsSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 desktop:grid-cols-4 gap-10 text-center">
          {statsData.items.map((stat) => (
            <div key={stat.label}>
              <p className="t1 text-white mb-2">{stat.value}</p>
              <p className="p5 text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
