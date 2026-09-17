import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach filo.nodo on WhatsApp, Instagram, or Facebook for handmade crochet and custom embroidery orders.",
};

export default function ContactPage() {
  return (
    <div className="surface-fiber pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.18em] uppercase text-ink/40">Contact</p>
          <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            Let&apos;s make something
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/55">
            Custom orders and questions are easiest on WhatsApp. You can also find
            us on Instagram and Facebook.
          </p>
        </Reveal>

        <div className="mt-12 space-y-6">
          <Reveal>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-ink/10 bg-cream/70 px-6 py-6 transition-colors hover:border-rose/40"
            >
              <p className="text-xs tracking-[0.16em] uppercase text-ink/40">WhatsApp</p>
              <p className="mt-2 font-display text-2xl text-ink">
                {siteConfig.social.whatsappDisplay}
              </p>
              <p className="mt-2 text-sm text-ink/55">Best for custom orders &amp; quotes</p>
            </a>
          </Reveal>

          <Reveal delayMs={80}>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-ink/10 bg-cream/70 px-6 py-6 transition-colors hover:border-rose/40"
            >
              <p className="text-xs tracking-[0.16em] uppercase text-ink/40">Instagram</p>
              <p className="mt-2 font-display text-2xl text-ink">@filo.nodo</p>
              <p className="mt-2 text-sm text-ink/55">New pieces and behind-the-scenes</p>
            </a>
          </Reveal>

          <Reveal delayMs={140}>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-ink/10 bg-cream/70 px-6 py-6 transition-colors hover:border-rose/40"
            >
              <p className="text-xs tracking-[0.16em] uppercase text-ink/40">Facebook</p>
              <p className="mt-2 font-display text-2xl text-ink">filonodoo</p>
              <p className="mt-2 text-sm text-ink/55">Updates and community</p>
            </a>
          </Reveal>
        </div>

        <Reveal delayMs={180} className="mt-12 flex flex-col items-start gap-6">
          <WhatsAppButton label="Open WhatsApp chat" />
          <SocialLinks />
        </Reveal>
      </div>
    </div>
  );
}
