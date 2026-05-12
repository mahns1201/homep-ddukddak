interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionTitle({ label, title, description, center = false }: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {label && <p className="p5 text-secondary uppercase tracking-widest mb-3">{label}</p>}
      <h2 className="t2 text-black mb-4">{title}</h2>
      {description && (
        <p className={`p1 text-gray ${center ? "mx-auto max-w-2xl" : "max-w-xl"}`}>{description}</p>
      )}
    </div>
  );
}
