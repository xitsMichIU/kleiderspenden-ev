import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "bootstrap/dist/css/bootstrap.min.css"

export const metadata = {
  title: "Kleiderspenden E.V",
  description: "Webseite zur Organisation von Kleiderspenden",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="img/logo.svg" sizes="any" />
      </head>
      <body>
        <nav>
          <Navbar />
        </nav>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
