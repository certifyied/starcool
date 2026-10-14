/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/complaint",
        destination: "/complaint-register",
        permanent: true,
      },
      {
        source: "/sitemap",
        destination:
          "https://bloggfeature.certifyied.workers.dev/adminApiBlog/api/sitemap.xml?projectId=17a41d82-d567-4fa8-a9a7-b1397d471e83",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
