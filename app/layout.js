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
