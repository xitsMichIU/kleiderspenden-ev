//Use client wegen der Navbar Komponenten
'use client'

//Importieren der React-Boostrap Komponenten
import { Nav, Navbar } from 'react-bootstrap';

export default function Footer() {
  return (
    <Navbar id="footer" className="justify-content-center fixed-bottom">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="mx-auto">
        <Nav.Link href="/privacy">Datenschutz</Nav.Link>
        <Nav.Link href="/legal">Impressum</Nav.Link>
      </Nav>
    </Navbar>
  );
}
