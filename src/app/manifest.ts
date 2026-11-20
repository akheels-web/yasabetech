import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Misyatech | Oman & Dubai Enterprise IT & Private AI",
    short_name: "Misyatech",
    description:
      "Enterprise networking, private AI compute and managed IT infrastructure for Oman and Dubai.",
    start_url: "/",
    display: "standalone",
    background_color: "#07142B",
    theme_color: "#07142B",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
