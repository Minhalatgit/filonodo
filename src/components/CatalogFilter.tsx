"use client";

import { useMemo, useState } from "react";
import {
  categories,
  getProductsByCategory,
  type ProductCategory,
} from "@/data/products";
import { ProductCard } from "./ProductCard";

export function CatalogFilter() {
  const [active, setActive] = useState<ProductCategory | "all">("all");

  const filtered = useMemo(() => getProductsByCategory(active), [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-ink/10 pb-6">
        {categories.map((category) => {
          const isActive = active === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActive(category.id)}
              className={`rounded-full px-4 py-2 text-xs tracking-[0.12em] uppercase transition-colors duration-300 ${
                isActive
                  ? "bg-ink text-cream"
                  : "bg-transparent text-ink/50 hover:text-ink"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
