import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Tarek Mahmud",
  description: "Portfolio website for Md Tarek Mahmud",
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
