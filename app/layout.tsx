import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'A quest id appended once',
  description: 'quest-2 follows quest-1. A repeat is refused. No quest contract is called.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
