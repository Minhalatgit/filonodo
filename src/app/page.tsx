import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getFeaturedProducts } from "@/data/products";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-linen">
        <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-28 md:px-8 md:pb-20">
          <p className="animate-float-in font-display text-5xl leading-none tracking-tight text-ink sm:text-6xl md:text-7xl">
            {siteConfig.name}
          </p>
          <h1 className="animate-float-in-delay mt-5 max-w-xl font-display text-2xl leading-snug text-ink/85 sm:text-3xl">
            {siteConfig.tagline}
          </h1>
          <p className="animate-float-in-delay-2 mt-4 max-w-md text-base leading-relaxed text-ink/55">
            {siteConfig.shortDescription}
          </p>
          <div className="animate-float-in-delay-2 mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/catalog"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm tracking-wide text-cream transition-opacity hover:opacity-90"
            >
              View catalog
            </Link>
            <WhatsAppButton
              variant="outline"
              label="Custom order"
              message="Hi filo.nodo! I'd like a custom embroidery on clothes."
            />
          </div>
        </div>
      </section>

      <section className="surface-soft px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs tracking-[0.18em] uppercase text-ink/40">
              From the studio
            </p>
            <h2 className="mt-3 max-w-lg font-display text-3xl text-ink md:text-4xl">
              A few pieces to begin with
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {featured.map((product, index) => (
              <Reveal key={product.id} delayMs={index * 120}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Link
              href="/catalog"
              className="inline-flex text-sm tracking-[0.12em] uppercase text-ink/60 underline decoration-rose/50 underline-offset-8 transition-colors hover:text-ink"
            >
              Browse full catalog
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-cream md:px-8 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-xl">
            <p className="text-xs tracking-[0.18em] uppercase text-cream/45">
              Made for you
            </p>
            <h2 className="mt-3 font-display text-3xl leading-snug md:text-4xl">
              Custom embroidery available
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream/65">
              Names, dates, motifs — stitched onto clothes or framed as circle pieces.
              Tell us what you imagine; we&apos;ll craft it by hand.
            </p>
          </Reveal>
          <Reveal delayMs={120}>
            <WhatsAppButton
              variant="solid"
              label="Order on WhatsApp"
              message="Hi filo.nodo! I'd like to place a custom embroidery order."
              className="!bg-cream !text-ink hover:!bg-oat"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink/10 px-5 py-16 md:px-8">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
          <p className="font-display text-2xl text-ink">Follow the stitches</p>
          <SocialLinks />
        </Reveal>
      </section>
    </>
  );
}
