import { Inter,Signika,Dangrek,Revalia,Ubuntu_Mono,Trispace,Martian_Mono,JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const signika = Signika({subsets:['latin'],weight:'400'});
const dangrek = Dangrek({subsets:['latin'],weight:'400'});
const revalia = Revalia({subsets:['latin'],weight:['400']});
const ubuntu = Ubuntu_Mono({subsets:['latin'],weight:['700']});
const trispace = Trispace({subsets:['latin'],weight:['500']});
const martian_Mono = Martian_Mono({subsets:['latin'],weight:['400']});
const jetBrains_Mono = JetBrains_Mono({subsets:['latin'],weight:['400']});

export const metadata = {
  title: {
    default : "Synwave Solutions | A Software Development Company ",
    template : "%s - Synwave Solutions",
  },
  description: "A Software Development Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={`${signika.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

