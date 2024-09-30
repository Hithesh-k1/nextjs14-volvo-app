import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Volvo Cars (Global Online Digital)",
  description:
    "Our team's designer has come up with a new design to show our latest and greatest recharge cars on the website.Here is how the design look like for desktop and mobile (files are stored under docs folder)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="md:container-max p-16">{children}</body>
    </html>
  );
}
