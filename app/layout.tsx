import "./globals.css";
import { Header } from "@/components";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Santolocorl",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Header />
        {children}
        <div className="w-full h-full bg-cover bg-center bg-[url('/bg.png')] absolute top-0"></div>
        <div className="w-[30%] h-[30%] bg-cover bg-center bg-[url('/mask.svg')] absolute top-0 left-0 z-[-1]"></div>
        <div className="w-[30%] h-[40%] bg-cover bg-center bg-[url('/mask_1.svg')] absolute top-0 right-[-10%] top-[25%] blur-2xl"></div>
      </body>
    </html>
  );
}
