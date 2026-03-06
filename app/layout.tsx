import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "What's Your Coffee Personality?",
  description: "Take the quiz to discover your coffee personality and get a personalized coffee recommendation!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
