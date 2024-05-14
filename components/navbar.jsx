//Client Komponente wegen der Navbar
'use client'

//Importieren der benötigen Komponenten
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Komponente für die Navigation
export default function Navigation() {
    return (
        <Navbar id="navigation" collapseOnSelect expand="lg" data-bs-theme="light">
            <Navbar.Brand href="/"><img src="/img/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="Kleidungsstück" /> </Navbar.Brand>
            {/*Schaltfläche zum Zusammenklappen der Navigationsleiste*/}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            {/*Navigationsmenü welches sich bei Bedarf aufklappt bei Bildschirmen mit einer Breite kleiner als 960px */}
            <Navbar.Collapse id="responsive-navbar-nav">
                {/*Liste der Navigationslinks */}
                <Nav className="me-auto">
                    <Nav.Link href="/">Startseite</Nav.Link>
                    <Nav.Link href="/donate">Spenden</Nav.Link>
                    <Nav.Link href="/about">Über uns</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
