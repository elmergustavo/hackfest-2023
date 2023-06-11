import "./css/globals.css";
import "./css/tags.css";
import "./css/buttons.css";
import { Figtree } from "next/font/google";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Colitas",
  description: "Adopta tu mascota, con nosotros en colitas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={font.className}>
        <ClientOnly>
        <Modal actionLabel="Submit" title="Hello word" isOpen />
        <NavBar />
          
        </ClientOnly>
       
        {children}
        <Footer />
      </body>
    </html>
  );
}
