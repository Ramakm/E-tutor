import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
const inter = Inter({ subsets: ["latin"] });
const Layout = dynamic(() => import("@/components/Layouts/Layout"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: {
    template: "%s | E-tutor",
    default: "E-tutor | Home",
  },
  description: "This is E-tutor website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <main className="min-h-screen">{children}</main>
        </Layout>
      </body>
    </html>
  );
}
