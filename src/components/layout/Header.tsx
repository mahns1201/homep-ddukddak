"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "../ui/Button";
import siteData from "../../data/site.json";

const mobileMenuId = "mobile-navigation";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray/10 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          {siteData.siteName}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden tablet:flex items-center gap-8">
          {siteData.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href ? "text-primary" : "text-deep-gray hover:text-primary text-hover-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden tablet:block">
          <Button href={siteData.ctaButtonHref} size="sm">
            {siteData.ctaButtonText}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="tablet:hidden p-2 text-deep-gray cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-controls={mobileMenuId}
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id={mobileMenuId} className="tablet:hidden bg-white border-t border-gray/10 px-6 py-4 flex flex-col gap-4">
          {siteData.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium ${pathname === link.href ? "text-primary" : "text-deep-gray"}`}
            >
              {link.label}
            </Link>
          ))}
          <Button href={siteData.ctaButtonHref} size="sm">
            {siteData.ctaButtonText}
          </Button>
        </div>
      )}
    </header>
  );
}
