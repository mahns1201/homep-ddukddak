const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "200+", label: "Clients Worldwide" },
  { value: "500+", label: "Projects Delivered" },
  { value: "20", label: "Countries Reached" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 desktop:grid-cols-4 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-secondary text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
