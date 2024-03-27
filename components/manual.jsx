import React from 'react';
import { Accordion, Row, Col } from 'react-bootstrap';

function Manual() {
    return (
            <Accordion defaultActiveKey="0" as={Col} md="10">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Anleitung</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col>
                                <h2>Kleidungsspende in drei einfachen Schritten</h2>
                                <p><strong>Schritt 1: Methode wählen</strong></p>
                                <p>Sie können auf zwei verschiedene Arten Kleidung spenden:</p>
                                <ol>
                                    <li><strong>Abholung durch ein Sammelfahrzeug:</strong> Geben Sie ihre Kontaktdaten an, und ein Sammelfahrzeug wird die Kleidung abholen. Bitte beachten Sie, dass dies nur im Postleitzahlenbereich 78*** erfolgen kann. Wohnen Sie außerhalb dieses Bereichs, können Sie die Spende gerne in unserer Filiale vorbeibringen.</li>
                                    <li><strong>Abgabe in der Geschäftsstelle:</strong> Sie können auch gerne bei uns in der Filiale vorbeikommen. Sie können Ihre Spende entweder vorab registrieren oder die Spende erst bei Übergabe registrieren.</li>
                                </ol>
                                <p><strong>Schritt 2: Krisengebiet wählen</strong></p>
                                <p>Wählen Sie aus, in welchem Land wir Ihre Kleidungsspende bedürftigen Menschen zur Verfügung stellen sollen. Sie können hierbei eine Reihe von Krisengebieten aus der Liste auswählen. Wählen Sie das Krisengebiet, für das Sie am dringendsten helfen möchten!</p>
                                <p><strong>Schritt 3: Art der Kleidung wählen</strong></p>
                                <p>Wir bieten folgende Oberkategorien zur Auswahl der Kleidung:</p>
                                <ul>
                                    <li>Oberteile: T-Shirts, Hemden, Pullover, Jacken</li>
                                    <li>Unterteile: Hosen jeglicher Art, Unterwäsche</li>
                                    <li>Schuhe: Sneaker, Turnschuhe, Stiefel</li>
                                    <li>Accessoires: Handschuhe, Mützen, Schals</li>
                                </ul>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
    );
}

export default Manual;
