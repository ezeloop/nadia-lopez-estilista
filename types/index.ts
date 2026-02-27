export interface Service {
  id: string;
  slug: string;
  category: "color" | "tratamiento" | "peinado" | "corte";
  name: string;
  tagline: string;
  description: string;
  technique?: string;
  benefit: string;
  duration?: string;
  icon?: string;
}

export interface GalleryItem {
  id: string;
  type: "antes-despues" | "peinado" | "trabajo";
  src: string;
  srcBefore?: string;
  alt: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  quote: string;
  rating: number;
}

export interface SocialLink {
  platform: "instagram" | "whatsapp" | "facebook";
  url: string;
  handle?: string;
}
