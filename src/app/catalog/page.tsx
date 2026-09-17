import type { Metadata } from "next";
import { CatalogFilter } from "@/components/CatalogFilter";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Catalog",
  description:
    "Browse handmade crochet items, custom embroideries, embroidery frames, and sets from filo.nodo.",
};

export default function CatalogPage() {
  return (
    <div className="surface-fiber pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.18em] uppercase text-ink/40">Catalog</p>
          <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            Handmade pieces
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/55">
            Explore what&apos;s ready to view. More photos and pieces will appear here
            as the collection grows — or message us for a custom order anytime.
          </p>
        </Reveal>

        <div className="mt-12">
          <CatalogFilter />
        </div>

        <Reveal className="mt-16 rounded-2xl bg-oat/60 px-6 py-8 md:flex md:items-center md:justify-between md:gap-8 md:px-8">
          <div>
            <h2 className="font-display text-2xl text-ink">Looking for something specific?</h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/60">
              Custom embroidery on clothes, circle frames, or a crochet set — start a
              WhatsApp chat with your idea.
            </p>
          </div>
          <WhatsAppButton
            className="mt-5 shrink-0 md:mt-0"
            label="Message filo.nodo"
            message="Hi filo.nodo! I'm browsing the catalog and have a custom request."
          />
        </Reveal>
      </div>
    </div>
  );
}
