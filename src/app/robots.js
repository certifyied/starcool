export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [
      "https://www.starcoolkochi.com/sitemap.xml",
      "https://www.starcoolkochi.com/sitemap",
    ],
  };
}
