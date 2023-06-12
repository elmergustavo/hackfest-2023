import "./css/globals.css";
import "./css/tags.css";
import "./css/buttons.css";
import "./css/components.css";
import { Figtree } from "next/font/google";
// import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import ClientOnly from "./components/ClientOnly";
// import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar";
import getCurrentUser from "./actions/getCurrentUser";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Colitas",
  description: "Adopta tu mascota, con nosotros en colitas",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const currentUser = await getCurrentUser();
  return (
    <html lang="es">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          {/* <Modal secondaryActionLabel='df' actionLabel="Submit"  title="Hello word" isOpen /> */}
          <Navbar currentUser={currentUser} />

        </ClientOnly>

        {children}
        <Footer />
      </body>
    </html>
  );
}
