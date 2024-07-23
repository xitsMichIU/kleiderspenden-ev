//Importiert die Komponenten für die Navigation und den Footer
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

//Importiert das CSS File für Bootstrap 
import "bootstrap/dist/css/bootstrap.min.css";

//Importiert das eigene CSS File
import "./style.css"
import { Suspense } from "react";

//React Funktion die das RootLayout rendert
export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        {/*Legt das Icon und den Titel in der Menüleiste Fest*/}
        <link rel="icon" href="img/logo.png" />
        <title>Kleiderspenden E.V</title>
      </head>
      <body>
        {/*Navigationskomponente Einfügen*/}
        <nav>
          <Navbar />
        </nav>
        {/*Basierend aus der Unterseite wird die Unterseite gerendert*/}
        <main className="main">
          {/*Suspend wird benötigt um die Übersichtsseite zu laden*/}
          <Suspense>
            {children}
          </Suspense>
        </main>
        {/*Footer Komponente einfügen*/}
        <footer>
          <Footer />
        </footer>
      </body>
    </html >
  );
}