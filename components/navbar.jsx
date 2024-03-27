//Client Komponente wegen "Use State"
'use client'

//Importiert die benötigten Komponenten des React boostrap Frameworks
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Komponente für die Navigation
function Navigation() {
    return (
        <Navbar id="navigation" collapseOnSelect expand="lg" data-bs-theme="light" className="mb-2">
            {/*Enthält die Navigationselemente*/}
            {/*Container fluid, damit die Navigation den ganzen Platz einnimmt*/}
            <Container fluid>
                {/*Das Logo wird in die Navigation eingebunden*/}
                <Navbar.Brand href="/"><img src="/img/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="Kleidungsstück" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/*Elemente der Navigation*/}
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/donate">Kleidung Spenden</Nav.Link>
                        <Nav.Link href="/about">Über uns</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;  