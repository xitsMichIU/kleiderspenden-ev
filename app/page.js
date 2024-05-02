//Client Komponente um die CSS Datei zu lesen
'use client'

import { Container } from "react-bootstrap";
//Importiert die CSS Datei
import "/app/style.css"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

//Import der benötigten React-Komponenten
import React from "react"

export default function Home() {
  return (
    <Container fluid>
      <Image className="mb-4" src="img/Kleider.jpeg" alt="Kleiderschrank" fluid />
      <h1>Willkommen beim Kleiderspenden e.V.</h1>
      <p>Wir sind ein gemeinnütziger Verein im Hegau und nehmen Kleiderspenden entgegen.</p>

      {/*xs stellt sicher das die Karten untereinander angezeigt werden*/}
      <Row xs={1} md={2} className="g-4 mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Jetzt Spenden!</Card.Title>
              <Card.Text>
                Helfen Sie Bedürftigen und spenden Sie
              </Card.Text>
              <Button href="/donate" variant="primary">Jetzt Spenden</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Vereinsgeschichte</Card.Title>
              <Card.Text>
                Lernen Sie uns besser kennen.
              </Card.Text>
              <Button href="/about" variant="primary">Über uns</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>


    </Container >
  );
}
