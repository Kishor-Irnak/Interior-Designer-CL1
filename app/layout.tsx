import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-hanken",
});

export const metadata: Metadata = {
  title: "dps - Home Improvement & Renovation",
  description: "Your trusted partner for quality home improvement.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={hanken.variable}>
      <body
        className={`${hanken.className} font-sans antialiased bg-[#0a0a0a] text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
