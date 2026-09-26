import storeData from "./store-data.json";

export interface ColorOption {
  name: string;
  hex: string;
  image: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  category: "Bags" | "Small Goods" | "Travel" | "Accessories";
  subCategory: string;
  gender: "Women" | "Men" | "Travel" | "Unisex";
  tag?: "Bestseller" | "New Arrival" | "Artisan Special" | "Limited Edition";
  description: string;
  craftStory: string;
  dimensions: string;
  material: string;
  hardware: string;
  weight: string;
  colors: ColorOption[];
  images: string[];
  isPersonalizable: boolean;
  rating: number;
  reviewsCount: number;
  journeySteps: { step: string; title: string; desc: string }[];
}

export interface CategoryItem {
  name: string;
  slug: string;
  desc: string;
  image: string;
  count: string;
}

export interface JournalPost {
  id: string;
  slug: string;
  category: string;
  title: string;
  readTime: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
}

export interface BoutiqueItem {
  city: string;
  address: string;
  hours: string;
  phone: string;
  email: string;
  image: string;
  desc: string;
}

export interface CraftStepItem {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
}

// Export parsed JSON data
export const PRODUCTS: Product[] = storeData.products as Product[];
export const CATEGORIES: CategoryItem[] = storeData.categories as CategoryItem[];
export const JOURNAL_POSTS: JournalPost[] = storeData.journalPosts as JournalPost[];
export const BOUTIQUES: BoutiqueItem[] = storeData.boutiques as BoutiqueItem[];
export const CRAFT_STEPS: CraftStepItem[] = storeData.craftSteps as CraftStepItem[];
export const ANNOUNCEMENTS = storeData.announcements;

export default storeData;
