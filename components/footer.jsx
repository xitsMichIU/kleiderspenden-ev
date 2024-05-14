//Use client wegen der Navbar Komponenten
'use client'

//Importieren der React-Boostrap Komponenten
import { Nav, Navbar } from 'react-bootstrap';


//Footer Komponente
export default function Footer() {
  return (
    <Navbar id="footer" className="justify-content-center bottom">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="mx-auto">
        {/*Liste der Navigationslinks */}
        <Nav.Link href="/privacy">Datenschutz</Nav.Link>
        <Nav.Link href="/legal">Impressum</Nav.Link>
      </Nav>
    </Navbar>
  );
}
