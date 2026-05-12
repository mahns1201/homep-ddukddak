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
    <footer className="bg-gray-9 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 tablet:grid-cols-4 gap-10">
        <div className="tablet:col-span-2">
          <p className="t3 text-white mb-3">Horizon</p>
          <p className="p4 text-gray-5 max-w-xs">
            We help businesses build digital products that create lasting impact. From strategy to launch, we are your
            partner every step of the way.
          </p>
        </div>

        <div>
          <p className="p4 text-white mb-4">Company</p>
          <ul className="flex flex-col gap-3">
            {links.company.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="p4 text-gray-5 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="p4 text-white mb-4">Services</p>
          <ul className="flex flex-col gap-3">
            {links.services.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="p4 text-gray-5 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col tablet:flex-row items-center justify-between gap-4">
          <p className="p6 text-gray-5">© 2026 Horizon. All rights reserved.</p>
          <p className="p6 text-gray-5">contact@horizon.com</p>
        </div>
      </div>
    </footer>
  );
}
