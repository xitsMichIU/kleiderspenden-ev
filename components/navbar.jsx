//Client Komponente wegen der Navbar
'use client'

//Importieren der benötigen Komponenten
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Komponente für die Navigation
export default function Navigation() {
    return (
        <Navbar id="navigation" collapseOnSelect expand="lg" data-bs-theme="light" className="mb-2">
            <Navbar.Brand href="/"><img src="/img/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="Kleidungsstück" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/donate">Kleidung Spenden</Nav.Link>
                    <Nav.Link href="/about">Über uns</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
