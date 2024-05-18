import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const imgUrl = "/imgs/og.png"

export const metadata = {
  title: "Welcome to Sagarmoy Sengupta Web",
  description: "Sagar Codes Digital Placeholder",
  metadataBase: new URL("https://www.withjessi.com"),
  openGraph: {
    title: 'Sagarmoy Sengupta',
    description: 'The calmest person in tech',
    url: 'https://www.sagarmoy.work',
    siteName: 'Sagar Codes Portfolio',
    images: [
      {
        url: imgUrl,
        width: 800,
        height: 600,
      },
      {
        url: imgUrl,
        width: 1800,
        height: 1600,
        alt: 'Sagar Codes Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
