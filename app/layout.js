import { Inter, Signika, Dangrek, Revalia, Ubuntu_Mono, Trispace, Martian_Mono, JetBrains_Mono, Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Head from "next/head";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from '../components/ui/sonner';

const inter = Inter({ subsets: ["latin"] });
const signika = Signika({ subsets: ['latin'], weight: '400' });
const dangrek = Dangrek({ subsets: ['latin'], weight: '400' });
const revalia = Revalia({ subsets: ['latin'], weight: ['400'] });
const ubuntu = Ubuntu_Mono({ subsets: ['latin'], weight: ['700'] });
const trispace = Trispace({ subsets: ['latin'], weight: ['500'] });
const martian_Mono = Martian_Mono({ subsets: ['latin'], weight: ['400'] });
const jetBrains_Mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400'] });
const fredoka = Fredoka({ subsets: ['latin'], weight: ['variable'] });

export const metadata = {
  title: {
    default: "Synwave Solutions | A Software Development Company ",
    template: "%s - Synwave Solutions",
  },
  openGraph: {
    title: "Synwave Solutions"
  },
  description: "Synwave is a leading UK-based software development company specializing in custom software solutions, web and mobile app development, generative AI, and DevOps. Our expert team delivers cutting-edge, scalable, and user-centric digital experiences. From initial concept to deployment, we provide full-cycle development services, including quality assurance, app maintenance, and video editing. At Synwave, we harness innovative technologies to drive your business forward, ensuring robust and future-proof solutions tailored to your unique needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={`${signika.className} min-h-screen flex flex-col`}>
        <NextTopLoader
          color="#F33A6A"
          showSpinner={false}
          height={1.5}
          easing="ease"
        />
        <Navbar />
        <main className="flex-grow">
          {children}
          <Toaster />
        </main>
        <Footer />
      </body>
    </html>
  );
}

