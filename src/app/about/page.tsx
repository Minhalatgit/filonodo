import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "filo.nodo turns strings into aesthetic things — handmade crochet and custom embroidery crafted with care.",
};

export default function AboutPage() {
  return (
    <div className="surface-fiber pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.18em] uppercase text-ink/40">About</p>
          <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            {siteConfig.name}
          </h1>
        </Reveal>

        <Reveal delayMs={80} className="mt-10 space-y-6 text-lg leading-relaxed text-ink/70">
          <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
            {siteConfig.tagline}
          </p>
          <p>
            We craft handmade crochet pieces, embroidery circle frames, and
            customized embroideries on clothes — soft textures, careful stitches,
            and designs meant to feel personal.
          </p>
          <p>
            Whether it&apos;s a milestone sweater, a baby set, or a name stitched onto
            something you already love, every piece starts with a conversation and
            ends in something you can hold.
          </p>
        </Reveal>

        <Reveal delayMs={140} className="mt-12 border-t border-ink/10 pt-10">
          <h2 className="font-display text-2xl text-ink">What we make</h2>
          <ul className="mt-6 space-y-4 text-ink/65">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" />
              Crochet wearables — sweaters, hats, booties and more
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" />
              Embroidery circle frames for walls and gifts
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" />
              Custom embroideries on clothes — names, dates, motifs
            </li>
          </ul>
        </Reveal>

        <Reveal delayMs={180} className="mt-12">
          <WhatsAppButton label="Start a custom order" />
        </Reveal>
      </div>
    </div>
  );
}
