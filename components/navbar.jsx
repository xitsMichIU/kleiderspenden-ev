'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
    return (
        <Navbar style={{backgroundColor: "#e3f2fd"}} collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="/"><img src="/img/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="Kleidungsstück" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="donate">Kleidung Spenden</Nav.Link>
                        <Nav.Link href="about">Über uns</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;