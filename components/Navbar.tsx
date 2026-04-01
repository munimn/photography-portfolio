"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navBg =
    isHome && !scrolled
      ? "bg-transparent"
      : "bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_0_#E8DDD0]";

  const linkColor =
    isHome && !scrolled ? "text-cream/90 hover:text-cream" : "text-taupe hover:text-espresso";

  const logoColor = isHome && !scrolled ? "text-cream" : "text-espresso";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="container-main flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className={`font-playfair text-xl tracking-wide transition-colors duration-500 ${logoColor}`}>
            FujiX<span className="text-terracotta">Mun</span>snaps
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-lato text-xs tracking-[0.2em] uppercase transition-colors duration-300 relative group ${linkColor}`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-terracotta transition-all duration-300 ${
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            className={`hidden md:inline-flex items-center gap-2 font-lato text-xs tracking-[0.2em] uppercase px-6 py-3 border transition-all duration-300 ${
              isHome && !scrolled
                ? "border-cream/60 text-cream hover:bg-cream hover:text-espresso"
                : "border-terracotta text-terracotta hover:bg-terracotta hover:text-cream"
            }`}
          >
            Book a Session
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors duration-300 ${logoColor}`}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed inset-0 z-40 bg-espresso flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
              >
                <Link
                  href={link.href}
                  className={`font-playfair text-4xl text-cream/80 hover:text-cream transition-colors ${
                    pathname === link.href ? "text-terracotta-light" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <Link href="/contact" className="btn-ghost mt-4">
                Book a Session
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
