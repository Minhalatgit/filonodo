export type ProductCategory =
  | "crochet"
  | "custom-embroidery"
  | "accessories"
  | "sets"
  | "gifts";

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
  { id: "crochet", label: "Crochet Wear" },
  { id: "custom-embroidery", label: "Custom Embroidery" },
  { id: "accessories", label: "Accessories" },
  { id: "sets", label: "Sets" },
  { id: "gifts", label: "Gifts" },
];

/**
 * Add new items here. Drop images in /public/products and set the path.
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
    id: "little-butterfly-sweater",
    title: "Little Butterfly Pink Sweater",
    description:
      "Bright pink crochet sweater with butterfly and flower appliqués — soft, playful, and made for little ones.",
    category: "crochet",
    image: "/products/little-butterfly-sweater.jpg",
    featured: true,
  },
  {
    id: "one-birthday-bear-sweater",
    title: "First Birthday Bear Sweater",
    description:
      "Beige crochet sweater with a teddy bear patch and embroidered “one” — a keepsake for first birthdays.",
    category: "custom-embroidery",
    image: "/products/one-birthday-bear-sweater.jpg",
    featured: true,
  },
  {
    id: "granny-square-cardigan",
    title: "Sunburst Granny Square Cardigan",
    description:
      "Open-front crochet cardigan made from floral granny squares with a rich teal border.",
    category: "crochet",
    image: "/products/granny-square-cardigan.jpg",
  },
  {
    id: "red-bow-cardigan",
    title: "Crimson Bow Cardigan",
    description:
      "Chunky red crochet cardigan scattered with white crochet bows and classic button front.",
    category: "crochet",
    image: "/products/red-bow-cardigan.jpg",
  },
  {
    id: "pizza-party-sweater",
    title: "Pizza Party Red Sweater",
    description:
      "Bold red crochet sweater with a playful pizza motif and sunny yellow neckline accents.",
    category: "crochet",
    image: "/products/pizza-party-sweater.jpg",
  },
  {
    id: "cherry-bag-set",
    title: "Cherry Bag & Daisy Hair Set",
    description:
      "Pink and white crochet shoulder bag with cherry detail, paired with matching daisy hair flowers.",
    category: "sets",
    image: "/products/cherry-bag-set.jpg",
  },
  {
    id: "crochet-gajra-roses",
    title: "Crochet Gajra with Red Roses",
    description:
      "Cream puff-stitch floral gajras finished with a single red crochet rose — classic and reusable.",
    category: "accessories",
    image: "/products/crochet-gajra-roses.jpg",
  },
  {
    id: "floral-crochet-parandi",
    title: "Floral Crochet Parandi",
    description:
      "Olive-green crochet parandi with magenta and peach flowers, finished with soft yarn tassels.",
    category: "accessories",
    image: "/products/floral-crochet-parandi.jpg",
  },
  {
    id: "cream-scallop-bandana",
    title: "Cream Scallop Crochet Bandana",
    description:
      "Ivory open-stitch bandana with scalloped edges and soft ties — light, vintage, and versatile.",
    category: "accessories",
    image: "/products/cream-scallop-bandana.jpg",
  },
  {
    id: "crochet-tulip-bouquet",
    title: "Crochet Tulip Bouquet",
    description:
      "Hand-crocheted red and white tulips wrapped in sheer fabric with a satin bow — a gift that lasts.",
    category: "gifts",
    image: "/products/crochet-tulip-bouquet.jpg",
  },
];

export function getFeaturedProducts() {
  return products.filter((p) => p.featured && !p.comingSoon);
}

export function getProductsByCategory(category: ProductCategory | "all") {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}
