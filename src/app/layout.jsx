import "./globals.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const metadata = {
  title: "Portofolio | Awang",
  description: "Personal portfolio of Awang, Software Engineering Fresh Graduate at Polytechnic State Padang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="text-white">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
