//Importiert die Komponenten für die Navigation und den Footer
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

//Importiert das CSS File für Bootstrap 
import "bootstrap/dist/css/bootstrap.min.css";

//Importiert das eigene CSS File
import "./style.css"

//Variable das die Metadaten für die Webseite Enthält
export const metadata = {
  title: "Kleiderspenden E.V",
  description: "Webseite zur Organisation von Kleiderspenden",
};

//React funktion die das RootLayout rendert
export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        {/*Legt das Icon in der Menüleiste Fest*/}
        <link rel="icon" href="img/logo.svg" sizes="any" />
      </head>
      <body>
        {/*Navigationskomponente Einfügen*/}
        <nav>
          <Navbar />
        </nav>
        {/*Basierend aus der Unterseite wird die Unterseite gerendert*/}
        <main className="main">{children}</main>
        {/*Footer Komponente einfügen*/}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
