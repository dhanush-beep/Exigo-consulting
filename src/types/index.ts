export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string; // Name of the Lucide icon
  features: string[];
  benefits: string[];
  detailedDescription: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
  rating: number;
}

export interface Author {
  name: string;
  role: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: Author;
  coverImage?: string;
  category: string;
  readTime: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
  email?: string;
  education?: string[];
  expertise?: string[];
}
