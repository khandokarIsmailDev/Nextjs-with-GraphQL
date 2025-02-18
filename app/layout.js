import localFont from "next/font/local";
import Header from "./components/Header";
import "./globals.css";
import Footer from "./components/Footer";

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

export const metadata = {
  title: "BlogIs",
  description: "Most Demandable Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <main className="min-h-fit">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
