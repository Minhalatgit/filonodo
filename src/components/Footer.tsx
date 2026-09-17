import Link from "next/link";
import { siteConfig } from "@/data/site";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-ink/10 bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-display text-3xl tracking-tight">{siteConfig.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            {siteConfig.tagline}
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.16em] uppercase text-cream/45">Explore</p>
          <ul className="mt-4 space-y-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-cream/80 transition-colors hover:text-rose-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.16em] uppercase text-cream/45">Connect</p>
          <SocialLinks tone="light" className="mt-4" />
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm text-cream/70 transition-colors hover:text-rose-soft"
          >
            {siteConfig.social.whatsappDisplay}
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-cream/40 md:px-8">
          © {new Date().getFullYear()} {siteConfig.name}. Handmade with care.
        </p>
      </div>
    </footer>
  );
}
