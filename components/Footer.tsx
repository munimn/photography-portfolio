import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/70">
      <div className="container-main py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <p className="font-playfair text-2xl text-cream">
              FujiX<span className="text-terracotta-light">Mun</span>snaps
            </p>
            <p className="font-lato text-sm leading-relaxed text-cream/60">
              You live it. I&apos;ll capture it.
            </p>
            <p className="font-lato text-sm text-cream/50">
              Wedding &amp; Portrait Photography
              <br />
              by Nafis Ahmed Munim
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="section-label text-cream/40">Explore</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-lato text-sm text-cream/60 hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <p className="section-label text-cream/40">Connect</p>
            <div className="space-y-3">
              <a
                href="mailto:nafis@fujixmunsnaps.com"
                className="block font-lato text-sm text-cream/60 hover:text-cream transition-colors duration-200"
              >
                nafis@fujixmunsnaps.com
              </a>
              <div className="flex gap-6 pt-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="font-lato text-xs tracking-[0.2em] uppercase text-cream/50 hover:text-terracotta-light transition-colors duration-200"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-lato text-xs text-cream/30 tracking-widest">
            © {new Date().getFullYear()} FujiXMunsnaps. All rights reserved.
          </p>
          <p className="font-lato text-xs text-cream/30">
            Crafted with light &amp; love.
          </p>
        </div>
      </div>
    </footer>
  );
}
