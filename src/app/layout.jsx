import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Resumaders",
    template: "%s | Resumaders",
  },
  description: "Building Resumes with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  );
}
