import { Inter,Signika,Dangrek,Revalia,Ubuntu_Mono,Trispace } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const inter = Inter({ subsets: ["latin"] });
const signika = Signika({subsets:['latin'],weight:'400'});
const dangrek = Dangrek({subsets:['latin'],weight:'400'});
const revalia = Revalia({subsets:['latin'],weight:['400']});
const ubuntu = Ubuntu_Mono({subsets:['latin'],weight:['700']});
const trispace = Trispace({subsets:['latin'],weight:['500']});
export const metadata = {
  title: "Synwave",
  description: "Generated by create next app",
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

