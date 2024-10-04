import { Metadata } from "next";
import Hero from "./components/hero";

export const metadata: Metadata = {
  title: "Software Engineer, Tech Speaker and YouTuber | Dhanushka Chandana",
  description:
    "Dhanushka is a software engineer based in Berlin. He loves to share tech knowledge & teach what he learns. He creates tech content at Outpost Dev & Dev Diary by Dhanushka on Full-stack development",
  keywords: [
    "software engineer",
    "tech speaker",
    "youtuber",
    "full-stack development",
    "software architecture",
    "react",
    "next.js",
    "typescript",
    "developer",
    "dhanushka chandana",
    "outpost dev",
    "mentor",
  ],
  openGraph: {
    siteName: "Dhanushka Chandana",
    url: "https://dhanushka.dev",
    type: "website",
    title: "Software Engineer, Tech Speaker and YouTuber | Dhanushka Chandana",
    description:
      "Dhanushka is a software engineer based in Berlin. He loves to share tech knowledge & teach what he learns. He creates tech content at Outpost Dev & Dev Diary by Dhanushka on Full-stack development",
    images: [
      {
        url: "https://dhanushka.dev/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "dhanushka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineer, Tech Speaker and YouTuber | Dhanushka Chandana",
    description:
      "Dhanushka is a software engineer based in Berlin. He loves to share tech knowledge & teach what he learns. He creates tech content at Outpost Dev & Dev Diary by Dhanushka on Full-stack development",
    creator: "@_dhanushkac",
    site: "@_dhanushkac",
    images: [
      {
        url: "https://dhanushka.dev/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "dhanushka",
      },
    ],
  },
  alternates: {
    canonical: "https://dhanushka.dev",
    types: {
      "application/rss+xml": "https://dhanushka.dev/rss.xml",
    },
  },
  metadataBase: new URL("https://dhanushka.dev"),
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-10 pt-10">
      <Hero />
    </main>
  );
}
