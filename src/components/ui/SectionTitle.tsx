interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionTitle({ label, title, description, center = false }: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {label && <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">{label}</p>}
      <h2 className="text-3xl font-bold text-black mb-4">{title}</h2>
      {description && (
        <p className={`text-gray text-lg leading-relaxed ${center ? "mx-auto max-w-2xl" : "max-w-xl"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
