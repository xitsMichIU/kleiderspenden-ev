'use client'

//Imports festlegen
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Kleidungsstück from './kleidungs';

//Formular für das Registieren einer Kleiderspende
export default function Formular() {

    //Wird benötigt im die Gewählte Abholungsmethode zu erkennen, Standardwert 0
    const [option, setOption] = useState(0);

    //Funktion um die Variable Anzupassen
    const optionChange = (event) => {
        //Der State wird auf die Ausgewählte Option gesetzt. 
        setOption(event.target.value);
        //Verhindert das die Evaluierung nach Formular Änderung angezeigt wird
        setValidated(false);
    };


    //Wird benötigt um die eingegebenen Daten zu Validieren, Standardwert: false
    const [validated, setValidated] = useState(false);

    //Anpassung der Validerung
    const [spendengebiet, setSpendengebiet] = useState(0);
    const [customSelectClass, setCustomSelectClass] = useState();

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setSpendengebiet(selectedValue);

        if (spendengebiet == "0") {
            console.log("Default Spendengebiet")
            setCustomSelectClass('custom-select is-invalid');
        } else {
            setCustomSelectClass('custom-select is-valid');
            console.log("Anderes Spendengebiet")
        }

    }

    //Funktion zur Validierung der Felder, verhindert den Submit wenn Daten fehlen
    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (spendengebiet == "0") {
            setCustomSelectClass('custom-select is-invalid');
        } else {
            setCustomSelectClass('custom-select is-valid');
        }

        setValidated(true);

    };

    //Gibt das eigentliche Formular zurück
    return (
        // Konfiguration des Formulars für die Validierung
        // noValidate: Deaktiviert die Standard-Formularvalidierung des Browsers
        // validated: Setzt den aktuellen Status der Validierungsvariable auf false 
        // onSubmit: Die Funktion zur Validierung wird aufgerufen
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

            {/*Erste Reihe des Formulars zur Festlegung der Methode*/}
            <Row className="mb-3">
                {/*Erste Reihe des Formulars mit folgenden Optionen:
                className="mb-3": Margin nach unten wird festgelegt
                Form.Group: Element um in Bootstrap für Formularkomponenten
                as={Col}: Legt fest, dass es sich um eine Spalte handelt 
                md="4": Option um die Größe des Feldes festzulegen, es werden vier Spalten verwendet
                controlId: Eindeutige Kennung des Elements im Formular*/}

                <Form.Group as={Col} md="4">
                    <Form.Label>Wie möchtest du Spenden?</Form.Label>
                    {/*Setzet das Value auf die Standard Methode, und Updated die Methode beim Wechsel*/}
                    {/*Feld ist nicht verpflichtend, da es zwingend ausgewählt wird*/}
                    <Form.Select value={option} onChange={optionChange}>
                        <option>Bitte wählen...</option>
                        <option value="1">Abholung durch Sammelfahrzeug</option>
                        <option value="2">Abgabe an der Geschäftsstelle</option>
                    </Form.Select>
                </Form.Group>
            </Row >

            <div>
                {/*Basierend auf Abholmethode wird das passende Formular erstellt*/}
                {(() => {
                    //Option 1 bedeutet dass eine Abholung mit dem Sammelfahrzeug erfolgt.
                    if (option === "1") {
                        return (
                            <>
                                {/*Zweite Zeile mit den gleichen Optionen*/}
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" controlId="firstName">
                                        <Form.Label>Vorname</Form.Label>
                                        <Form.Control required type="text" placeholder="Vorname" />
                                        {/*Nachricht wenn es zu einem Problem bei der Validerung kommt*/}

                                        <Form.Control.Feedback type="invalid">Bitte geben Sie ihren Vornamen ein.</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="lastName">
                                        <Form.Label>Nachname</Form.Label>
                                        <Form.Control required type="text" placeholder="Nachname" />
                                        {/*Nachricht wenn es zu einem Problem bei der Validerung kommt*/}
                                        <Form.Control.Feedback type="invalid">Bitte geben Sie ihren Nachnamen ein.</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                {/*Dritte Zeile mit den gleichen Optionen*/}
                                <Row className="mb-3">
                                    {/*Feldlänge auf fünf gesetzt*/}
                                    <Form.Group as={Col} md="5" controlId="street">
                                        <Form.Label>Straße</Form.Label>
                                        <Form.Control type="text" placeholder="Straße" required />
                                        <Form.Control.Feedback type="invalid">Bitte geben Sie ihre Straße ein.</Form.Control.Feedback>
                                    </Form.Group>

                                    {/*Feldlänge auf 3 gesetzt, so bleibt die summe bei acht*/}
                                    <Form.Group as={Col} md="3" controlId="number">
                                        <Form.Label>Hausnummer</Form.Label>
                                        <Form.Control type="text" placeholder="Hausnummer" required />
                                        <Form.Control.Feedback type="invalid"> Bitte geben sie ihre Hausnummer ein.</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                {/*Vierte Zeile mit den gleichen Optionen*/}
                                <Row className="mb-3">
                                    {/*Feldlänge auf zwei gesetzt*/}
                                    <Form.Group as={Col} md="2" controlId="plz">
                                        <Form.Label>Postleitzahl</Form.Label>
                                        {/*Es können durch eine REGEX nur Postleitzahlen die mit 78 Beginnen eingegeben werden*/}
                                        <Form.Control type="text" placeholder="PLZ" pattern="^78.*$" required />
                                        <Form.Control.Feedback type="invalid">Adresse zu weit weg</Form.Control.Feedback>
                                    </Form.Group>

                                    {/*Feldlänge auf sechs gesetzt, sobleibt die summe bei acht*/}
                                    <Form.Group as={Col} md="6" controlId="location">
                                        <Form.Label>Ort</Form.Label>
                                        <Form.Control type="text" placeholder="Ort" required />
                                        <Form.Control.Feedback type="invalid">Bitte geben ihren Ort ein.</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                {/*Fünfte Zeile mit den gleichen Optionen*/}
                                <Row className="mb-3">
                                    {/*Feldlänge auf vier gesetzt*/}
                                    <Form.Group as={Col} md="4" controlId="crisisArea">
                                        <Form.Label>Kriesengebiet</Form.Label>
                                        <Form.Select className={customSelectClass} value={spendengebiet} onChange={handleSelectChange} >
                                            <option value="0">Bitte Wählen</option>
                                            <option value="1">Ukraine</option>
                                            <option value="2">Israel</option>
                                            <option value="3">Malaisya</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">Bitte wählen sie ein Kriesengebiet.</Form.Control.Feedback>
                                    </Form.Group>

                                    {/*Feldlänge auf vier gesetzt*/}
                                    <Form.Group as={Col} md="4" controlId="clothes">
                                        <Kleidungsstück />
                                    </Form.Group>
                                </Row>

                                {/*Sechste Zeile mit den gleichen Optionen*/}
                                <Row className="mb-3">
                                    {/*Checkbox für AGBS / Datenschutzerklärung*/}
                                    <Form.Group>
                                        <Form.Check
                                            required
                                            label="Ich habe die AGBs gelsen"
                                            feedback="Bitte stimmen Sie der Datenverarbeitung zu"
                                            feedbackType="invalid"
                                        />
                                    </Form.Group>
                                </Row>
                                {/*Button um das Formular abzusenden*/}
                                <Button className="mb-3" type="submit">Spende Registrieren</Button>

                            </>
                        )

                        //Option für die Abgabe an der Geschäftsstelle    
                    } else if (option === "2") {
                        return (
                            <>
                                {/*Zweite Zeile mit den gleichen Optionen*/}
                                <Row className="mb-3">
                                    {/*Feldlänge auf vier gesetzt*/}
                                    <Form.Group as={Col} md="4" controlId="clothes">
                                        <Kleidungsstück />
                                    </Form.Group>

                                    {/*Feldlänge auf vier gesetzt*/}
                                    <Form.Group as={Col} md="4" controlId="crisisArea">
                                        <Form.Label>Kriesengebiet</Form.Label>
                                        <Form.Select required>
                                            <option value="0">Kriesengebiet</option>
                                            <option value="1">Ukraine</option>
                                            <option value="2">Israel</option>
                                            <option value="3">Malaisya</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">Bitte wählen sie ein Kriesengebiet.</Form.Control.Feedback>
                                    </Form.Group>

                                </Row>

                                {/*Dritte Zeile mit den gleichen Optionen*/}
                                <Row className="mb-3">
                                    {/*Checkbox für AGBS / Datenschutzerklärung*/}
                                    <Form.Group>
                                        <Form.Check
                                            required
                                            label="Ich habe die AGBs gelsen"
                                            feedback="Bitte stimmen Sie der Datenverarbeitung zu"
                                            feedbackType="invalid"
                                        />
                                    </Form.Group>

                                </Row>
                                {/*Button um das Formular abzusenden*/}
                                <Button className="mb-3" type="submit">Spende Registrieren</Button>
                            </>
                        )
                    } else {
                        return null;
                    }
                })()}
            </div>
        </Form >
    );
}