export type ProductCategory =
  | "crochet"
  | "custom-embroidery"
  | "embroidery-frames"
  | "sets";

export type Product = {
  id: string;
  title: string;
  description: string;
  category: ProductCategory;
  image: string | null;
  featured?: boolean;
  comingSoon?: boolean;
};

export const categories: { id: ProductCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "crochet", label: "Crochet" },
  { id: "custom-embroidery", label: "Custom Embroidery" },
  { id: "embroidery-frames", label: "Embroidery Frames" },
  { id: "sets", label: "Sets" },
];

/**
 * Add new items here. When you share more photos, drop them in
 * /public/products and set the image path (e.g. "/products/my-item.jpg").
 * Set comingSoon: true (and image: null) for placeholders.
 */
export const products: Product[] = [
  {
    id: "custom-six-sweater",
    title: "Custom Embroidered Baby Sweater",
    description:
      "Soft oatmeal crochet sweater with chunky custom lettering — made to mark little milestones.",
    category: "custom-embroidery",
    image: "/products/custom-six-sweater.jpg",
    featured: true,
  },
  {
    id: "pink-baby-set",
    title: "Pink & Cream Baby Set",
    description:
      "Handmade crochet hat and matching booties with delicate flower details.",
    category: "sets",
    image: "/products/pink-baby-set.jpg",
    featured: true,
  },
  {
    id: "embroidery-hoop-placeholder",
    title: "Embroidery Circle Frame",
    description: "Framed embroidery pieces for walls and gifts. Photos coming soon.",
    category: "embroidery-frames",
    image: null,
    comingSoon: true,
  },
  {
    id: "custom-clothing-placeholder",
    title: "Custom Embroidery on Clothes",
    description:
      "Names, dates, and motifs stitched onto garments of your choice. Share your idea on WhatsApp.",
    category: "custom-embroidery",
    image: null,
    comingSoon: true,
  },
  {
    id: "crochet-wearable-placeholder",
    title: "Crochet Wearables",
    description: "Hats, booties, sweaters and more — soft stitches, careful finishes.",
    category: "crochet",
    image: null,
    comingSoon: true,
  },
];

export function getFeaturedProducts() {
  return products.filter((p) => p.featured && !p.comingSoon);
}

export function getProductsByCategory(category: ProductCategory | "all") {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}
