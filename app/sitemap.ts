import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const defaultPages: MetadataRoute.Sitemap = [
    {
      url: "https://dhanushka.dev",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];

  const sitemap = [...defaultPages];

  return sitemap;
}
