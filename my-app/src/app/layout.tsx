import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "RuTech",
  description: "RuTech - Rutgers' leading tech student organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        {children}

      </body>
    </html>
  );
}
