import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata = {
  metadataBase: new URL("https://starcoolkochi.com"),
  title: "Star Cool - Home Appliance Repair Service in Kochi | AC, Washing Machine, Refrigerator Repair",
  description: "Do you require home appliance repair service in Kochi? For trustworthy and expert repairs of ACs, washing machines, refrigerators, TVs, and more, trust Star Cool.",
  keywords: "home appliance service Kochi, appliance repair Kochi, appliance maintenance Kochi, Star Cool Kochi, AC repair Kochi, washing machine repair Kochi, refrigerator repair Kochi",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Star Cool - Home Appliance Repair Service in Kochi",
    description: "Expert repair services for ACs, washing machines, refrigerators, TVs & more in Kochi.",
    url: "https://starcoolkochi.com",
    siteName: "Star Cool Kochi",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Star Cool Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Star Cool Kochi",
    "image": "https://starcoolkochi.com/icon.png",
    "logo": "https://starcoolkochi.com/icon.png",
    "url": "https://starcoolkochi.com",
    "telephone": "+918590225627",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kochi Bypass Road, Near Vyttila",
      "addressLocality": "Kochi",
      "addressRegion": "Kerala",
      "postalCode": "682019",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.9674",
      "longitude": "76.3180"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "21:00"
    },
    "priceRange": "₹"
  };

  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          precedence="default"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
