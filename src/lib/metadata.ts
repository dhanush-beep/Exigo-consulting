import { Metadata } from "next";

export const siteConfig = {
  name: "Exigo Consulting",
  description: "Elite M&A, Fundraising, Strategy, and Executive Search advisory firm guiding scaling enterprises to market leadership.",
  url: "https://exigo-consulting.com",
  ogImage: "/images/logo/og-image.jpg",
  contact: {
    email: "info@exigo-consulting.com",
    phone: "+91 80089 22112",
    address: "Level 1, Suite # 11, Tourism Plaza, Begumpet, Greenland's-Hyderabad. Telangana-India-500016."
  }
};

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false
}: {
  title: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      type: "website",
      url: siteConfig.url,
      images: [
        {
          url: image
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [image]
    },
    robots: noIndex
      ? {
          index: false,
          follow: false
        }
      : {
          index: true,
          follow: true
        },
    icons: {
      icon: "/favicon.ico"
    }
  };
}
