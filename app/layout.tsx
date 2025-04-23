import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./styles/components/footer.css";
import "./styles/components/navbar.css";
import "./styles/components/hero.css";
import "./styles/components/sections.css";
import "./styles/components/blogs.css";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ravi Kiran Pandi - Portfolio",
  description: "Personal portfolio website of Ravi Kiran Pandi, showcasing skills in Full-Stack Development, AI, and Cloud Computing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={poppins.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
