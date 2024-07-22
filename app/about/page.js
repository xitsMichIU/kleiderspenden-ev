//Client Komponente um die CSS Datei zu lesen
'use client'

//Importiert die benötigte CSS Datei
import React from "react"

//Importiert die CSS Datei
import "/app/style.css"

import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <h1>Vereinsgeschichte</h1>
                        <p>In der Stadt Singen am Hohentwiel beschlossen in den 60er Jahren Hans und Maria Störk, einen Kleiderspendenverein ins Leben zu rufen, um Bedürftigen in der Region zu helfen. Im laufe der Jahre wurde das Einsatzgebiet auf Krisenregionen weltweit ausgedehnt.</p>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} lg={6} className="mb-3">
                        <Card>
                            <Card.Body>
                                <h3>Anschrift der Geschäftsstelle</h3>
                                <Card.Text>
                                    Kleiderspenden e.V. <br />
                                    Schaffhauser Str. 60 <br />
                                    78224 Singen am Hohentwiel
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} lg={6} className="mb-3">
                        <Card>
                            <Card.Body>
                                <h3>Öffnungszeiten:</h3>
                                <Card.Text>
                                    Montag - Freitag: 9:00 - 17:00 Uhr <br />
                                    Samstag: 9:00 - 18:00 Uhr <br />
                                    Sonntag: Geschlossen
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default About;