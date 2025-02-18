import type { Metadata } from "next";
import localFont from "next/font/local";
import {Nunito} from "next/font/google";
import "./globals.css";
import Navabar from "./components/navbar/navbar";
import ClientOnly from "./components/ClientOnly";
// import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

const font = Nunito({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= {font.className}>

        <ClientOnly>
          <ToasterProvider/>
          {/* <Modal actionlabel="Submit" title="Hello World" isOpen/> */}
          <RegisterModal/>
        <Navabar/>

        </ClientOnly>

      
        
        {children}</body>
        
      
    </html>
  );
}
