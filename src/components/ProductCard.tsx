import Image from "next/image";
import type { Product } from "@/data/products";
import { categories } from "@/data/products";
import { WhatsAppButton } from "./WhatsAppButton";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const categoryLabel =
    categories.find((c) => c.id === product.category)?.label ?? product.category;

  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-oat">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="text-xs tracking-[0.18em] uppercase text-ink/40">
              Coming soon
            </span>
            <span className="font-display text-xl text-ink/50">{product.title}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <p className="text-[11px] tracking-[0.16em] uppercase text-ink/40">
          {categoryLabel}
        </p>
        <h3 className="mt-1.5 font-display text-xl leading-snug text-ink">
          {product.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
          {product.description}
        </p>
        {!product.comingSoon && (
          <div className="mt-4">
            <WhatsAppButton
              variant="outline"
              label="Ask about this"
              message={`Hi filo.nodo! I'm interested in: ${product.title}`}
              className="w-full text-xs"
            />
          </div>
        )}
        {product.comingSoon && (
          <div className="mt-4">
            <WhatsAppButton
              variant="soft"
              label="Request custom order"
              message={`Hi filo.nodo! I'd like to ask about: ${product.title}`}
              className="w-full text-xs"
            />
          </div>
        )}
      </div>
    </article>
  );
}
