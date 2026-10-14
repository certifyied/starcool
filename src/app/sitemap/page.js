import { redirect } from "next/navigation";

export default function SitemapPage() {
  redirect(
    "https://bloggfeature.certifyied.workers.dev/adminApiBlog/api/sitemap.xml?projectId=17a41d82-d567-4fa8-a9a7-b1397d471e83"
  );
}
