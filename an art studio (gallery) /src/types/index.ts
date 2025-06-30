export interface Artwork {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  year: number;
  tools: string[];
  price?: number;
  isNFT?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  service: string;
}