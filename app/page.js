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
      <h1>Wilkommen beim Kleiderspenden e.V</h1>
      <Image className="mb-4" src="img/Kleider.jpeg" alt="Beschreibung des Bildes" fluid />

      <Row md={2} className="g-4 mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Jetzt Spenden!</Card.Title>
              <Card.Text>
                Spenden Sie jetzt hier
              </Card.Text>
              <Button href="/donate" variant="primary">Jetz Spenden</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Die Vereinsgeschichte</Card.Title>
              <Card.Text>
                Lernen Sie uns besser kennen.
              </Card.Text>
              <Button href="/about" variant="primary">Über uns</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row md={2} className="g-4 mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Usere Mission</Card.Title>
              <Card.Text>
                Wir nehmen Kleiderspenden entgegen und verteilen sie an Bedürftige in Krisengebieten weltweit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Unsere Logistik</Card.Title>
              <Card.Text>
                Unsere jahrelange Erfahrung sichert die zuverlässige Zustellung von Kleiderspenden.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>


    </Container >
  );
}
