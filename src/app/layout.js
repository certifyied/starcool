import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Star Cool - Home Appliance Repair Service in Kochi | AC, Washing Machine, Refrigerator Repair",
  description: "Do you require home appliance repair service in Kochi? For trustworthy and expert repairs of ACs, washing machines, refrigerators, TVs, and more, trust Star Cool.",
  keywords: "home appliance service Kochi, appliance repair Kochi, appliance maintenance Kochi, Star Cool Kochi, AC repair Kochi, washing machine repair Kochi, refrigerator repair Kochi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          precedence="default"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
