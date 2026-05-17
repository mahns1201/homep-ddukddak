import Link from "next/link";
import siteData from "../../data/site.json";

const { footer } = siteData;

export default function Footer() {
  return (
    <footer className="bg-gray-9 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 tablet:grid-cols-4 gap-10">
        <div className="tablet:col-span-2">
          <Link href="/">
            <img src="/text-logo.svg" alt={siteData.siteName} width={140} />
          </Link>
        </div>

        {footer.links.map((group) => (
          <div key={group.heading}>
            <p className="p4 text-white mb-4">{group.heading}</p>
            <ul className="flex flex-col gap-3">
              {group.items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="p4 text-gray-5 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col tablet:flex-row items-center justify-center">
          <p className="p6 text-gray-5">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
