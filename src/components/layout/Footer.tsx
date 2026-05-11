import Link from "next/link";

const links = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Strategy & Consulting", href: "/services" },
    { label: "Web Development", href: "/services" },
    { label: "UI/UX Design", href: "/services" },
    { label: "Data & Analytics", href: "/services" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 tablet:grid-cols-4 gap-10">
        <div className="tablet:col-span-2">
          <p className="text-xl font-bold text-white mb-3">Horizon</p>
          <p className="text-gray text-sm leading-relaxed max-w-xs">
            We help businesses build digital products that create lasting impact. From strategy to launch, we are your
            partner every step of the way.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white mb-4">Company</p>
          <ul className="flex flex-col gap-3">
            {links.company.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-gray hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white mb-4">Services</p>
          <ul className="flex flex-col gap-3">
            {links.services.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-gray hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col tablet:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray">© 2026 Horizon. All rights reserved.</p>
          <p className="text-xs text-gray">contact@horizon.com</p>
        </div>
      </div>
    </footer>
  );
}
