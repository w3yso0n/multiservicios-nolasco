import { buildLocalBusinessJsonLd } from "@/lib/seo";

export function LocalBusinessJsonLd() {
  const data = buildLocalBusinessJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
