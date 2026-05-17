"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Button from "../ui/Button";
import siteData from "../../data/site.json";

const mobileMenuId = "mobile-navigation";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparent = pathname === "/" && !scrolled && !menuOpen;

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-colors duration-500 ${
        transparent ? "bg-transparent" : "bg-white border-b border-gray-5/10"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <img
            src="/text-logo.svg"
            alt={siteData.siteName}
            width={140}
            className={`transition-opacity ${transparent ? "brightness-0 invert " : ""}`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden tablet:flex items-center gap-12">
          {siteData.header.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`p2 transition-colors ${
                pathname === link.href
                  ? `text-active-underline ${transparent ? "text-white" : "text-primary"}`
                  : `text-hover-primary ${transparent ? "text-white/80 hover:text-white" : "text-gray-7 hover:text-primary"}`
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden tablet:block">
          <Button href={siteData.header.cta.href} size="sm" variant={transparent ? "white" : "primary"}>
            {siteData.header.cta.label}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={`tablet:hidden p-2 cursor-pointer transition-colors ${transparent ? "text-white" : "text-gray-7"}`}
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
        <div
          id={mobileMenuId}
          className="tablet:hidden bg-white border-t border-gray-5/10 px-6 py-4 flex flex-col gap-4"
        >
          {siteData.header.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`p4 ${pathname === link.href ? "text-primary" : "text-gray-7"}`}
            >
              {link.label}
            </Link>
          ))}
          <Button href={siteData.header.cta.href} size="sm">
            {siteData.header.cta.label}
          </Button>
        </div>
      )}
    </header>
  );
}
