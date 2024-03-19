//Das Formular wird als client Komponente behandelt
'use client'

//Import der benötigten React Methoden
import { useState } from 'react';
import React from 'react';
import { useRouter } from 'next/navigation'

//Import der benötigten React-Bootstrap Methoden
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Kleidungsstück from './kleidungswahl';
import Alert from 'react-bootstrap/Alert';


//Formular für das Registieren einer Kleiderspende
export default function Formular() {

    //Auswahl der Abholmethode, default Wert wird auf 0 für "Bitte wählen" festgelegt
    const [abholmethode, setAbholmethode] = useState(0);

    //Funktion die den Wechsel der Abholmethode behandelt.
    const handleSelectChangeAbholmethode = (e) => {

        //Bei einem Wechsel der Methode wird der Wert des Auswahlfeldes aktuallisiert
        setAbholmethode(e.target.value);

        //Wird die Methode gewechselt müssen bestehende Warnungen zurückgesetzt werden.
        setCustomValidationSpendengebiet('custom-select');
        setCustomValidationVorname('custom-select');
        setCustomValidationNachname('custom-select');
        setCustomValidationStrasse('custom-select');
        setCustomValidationHausnummer('custom-select');
        setCustomValidationPLZ('custom-select');
        setCustomValidationOrt('custom-select');
        setCustomValidationAGB('custom-select');
        setCustomValidationClothesCount('custom-select');
    };

    //Auswahl des Spendengebietes, default Wert wird auf "" für "Bitte wählen" festgelegt
    const [spendengebiet, setSpendengebiet] = useState("");

    //Konfiguration für die spätere Gültigkeitsprüfung. Ist der Wert in der Variable "spendengebiet" ungültig wird eine Warnung angezeigt.
    //Der Standardwert ist leer, das bedeutet, das keine Warnung angezeigt wird beim öffnen des Formulars.
    const [customValidationSpendengebiet, setCustomValidationSpendengebiet] = useState();

    //Methode die aufgerufen wird, wenn das gewählte Kriesengebiet geändert wird.
    const handleSelectChangeKriesengebiet = (e) => {
        //Anpassung der Variable "spendengebiet" mit dem akutellen Wert
        setSpendengebiet(e.target.value);
    }

    //Konfiguration der Zustandsvariable "nachname" um die Eingabe zu speichern und dynamisch zu aktuallisieren mit "useState"
    const [vorname, setVorname] = useState("");
    //Konfiguration der Zustandsvariable "customValidationVorname" der den Zustand der Validierung speichert.
    const [customValidationVorname, setCustomValidationVorname] = useState();

    //Methode die aufgerufen wird, wenn der Vorname geändert wird.
    const handleTextChangeVorname = (e) => {
        //Anpassung der Variable "Vorname" mit dem akutellen Wert
        setVorname(e.target.value);
    }

    //Konfiguration der Zustandsvariable "nachname" um die Eingabe zu speichern und dynamisch zu aktuallisieren mit "useState"
    const [nachname, setNachname] = useState("");
    //Konfiguration der Zustandsvariable "customValidationNachname" der den Zustand der Validierung speichert.
    const [customValidationNachname, setCustomValidationNachname] = useState();

    //Methode die aufgerufen wird, wenn der Nachname geändert wird.
    const handleTextChangeNachname = (e) => {
        //Anpassung der Variable "Nachname" mit dem akutellen Wert
        setNachname(e.target.value);
    }

    //Konfiguration der Zustandsvariable "strasse" um die Eingabe zu speichern und dynamisch zu aktuallisieren mit "useState"
    const [strasse, setStrasse] = useState("");
    //Konfiguration der Zustandsvariable "customValidationStrasse" der den Zustand der Validierung speichert.
    const [customValidationStrasse, setCustomValidationStrasse] = useState();

    //Methode die aufgerufen wird, wenn der die Straße geändert wird.
    const handleTextChangeStrasse = (e) => {
        //Anpassung der Variable "Nachname" mit dem akutellen Wert
        setStrasse(e.target.value);
    }

    ///Konfiguration der Zustandsvariable "hausnummer" um die Eingabe zu speichern und dynamisch zu aktuallisieren mit "useState"
    const [hausnummer, setHausnummer] = useState("");
    //Konfiguration der Zustandsvariable "customValidationHausnummer" der den Zustand der Validierung speichert.
    const [customValidationHausnummer, setCustomValidationHausnummer] = useState();

    //Methode die aufgerufen wird, wenn der die Hausnummer geändert wird.
    const handleTextChangeHausnummer = (e) => {
        //Anpassung der Variable "Hausnummer" mit dem akutellen Wert
        setHausnummer(e.target.value);
    }

    ///Konfiguration der Zustandsvariable "plz" um die Eingabe zu speichern und dynamisch zu aktuallisieren mit "useState"
    const [plz, setPLZ] = useState("");
    //Konfiguration der Zustandsvariable "customValidationPLZ" der den Zustand der Validierung speichert.
    const [customValidationPLZ, setCustomValidationPLZ] = useState();

    //Methode die aufgerufen wird, wenn die PLZ geändert wird.
    const handleTextChangePLZ = (e) => {
        //Anpassung der Variable "ort" mit dem akutellen Wert
        setPLZ(e.target.value);
    }

    //Konfiguration der Zustandsvariable "ort" um die Eingabe zu speichern und dynamisch zu aktuallisieren mit "useState"
    const [ort, setOrt] = useState("");
    //Konfiguration der Zustandsvariable "customValidationOrt" der den Zustand der Validierung speichert.
    const [customValidationOrt, setCustomValidationOrt] = useState();

    //Methode die aufgerufen wird, wenn der Ort geändert wird.
    const handleTextChangeOrt = (e) => {
        //Anpassung der Variable "ort" mit dem akutellen Wert
        setOrt(e.target.value);
    }

    //Konfiguration der Zustandsvariable "agb" um die Eingabe zu speichern und dynamisch zu aktuallisieren mit "useState"
    const [agb, setAGB] = useState(false);
    //Konfiguration der Zustandsvariable "customValidationAGB" der den Zustand der Validierung speichert.
    const [customValidationAGB, setCustomValidationAGB] = useState();

    //Methode die aufgerufen wird, wenn die Checkbox geändert wird.
    const handleCheckBoxChangeAGB = (e) => {
        //Anpassung der Variable "agb" mit dem akutellen Wert
        setAGB(e.target.checked);
    }

    //Konfiguration der Zustandsvariable "selectedClothes" um die Eingabe zu speichern und dynamisch zu aktuallisieren mit "useState"
    //Diese Variable Speichert ein Array. Das Array enthählt die Ausgewählte Kleidung.
    const [selectedClothes, setSelectedClothes] = useState([]);
    //Konfiguration der Zustandsvariable "customValidationClothesCount" der den Zustand der Validierung speichert.
    const [customValidationClothesCount, setCustomValidationClothesCount] = useState();

    //Methode die aufgerufen wird, wenn die ein Kleidungsstück Abgewählt / Ausgewählt wird.
    const handleClothesSelection = (selectedItems) => {
        //Anpassung der Variable "selectedItems" mit der akutell selektierten Kleidung
        setSelectedClothes(selectedItems);
    };

    //Funktion zur Validierung der Formulardaten. Es muss muss sichergestellt werden, dass alle wichtigen Angaben gemacht wurden.
    const handleSubmit = (event) => {

        //Variable Error dient zur feststellung, ob bei einem der Felder Daten fehlen. Wenn ja wird ein "Submit" verhindert
        let error = false;

        //Validierung der Felder wenn die Abholmethode 1 (Abholung durch Sammelfahrzeug) ausgewählt wurde
        if (abholmethode === "1") {

            //Validerung des Feldes Spendengebiet
            //Wenn der Wert leer ist, oder eine 0 enthält soll ein Fehler angezeigt werden.
            if (spendengebiet === "") {
                setCustomValidationSpendengebiet('custom-select is-invalid');
                error = true;
            } else if (spendengebiet === "0") {
                setCustomValidationSpendengebiet('custom-select is-invalid');
                error = true;
            }
            //Wenn kein Fehler erkannt worden ist, wird das Feld als valid angezeigt
            else {
                setCustomValidationSpendengebiet('custom-select is-valid');
            }

            //Validerung des Feldes vorname
            //Wenn der Wert leer ist soll ein Fehler angezeigt werden.
            if (vorname === "") {
                setCustomValidationVorname('custom-select is-invalid');
                error = true;
            }
            //Wenn kein Fehler erkannt worden ist, wird das Feld als valid angezeigt
            else {
                setCustomValidationVorname('custom-select is-valid');
            }

            //Validerung des Feldes Nachname
            //Wenn der Wert leer ist soll ein Fehler angezeigt werden.
            if (nachname === "") {
                setCustomValidationNachname('custom-select is-invalid');
                error = true;
            }
            //Wenn kein Fehler erkannt worden ist, wird das Feld als valid angezeigt
            else {
                setCustomValidationNachname('custom-select is-valid');
            }

            //Validerung des Feldes Straße
            //Wenn der Wert leer ist soll ein Fehler angezeigt werden.
            if (strasse === "") {
                setCustomValidationStrasse('custom-select is-invalid');
                error = true;
            }
            //Wenn kein Fehler erkannt worden ist, wird das Feld als valid angezeigt
            else {
                setCustomValidationStrasse('custom-select is-valid');
            }

            //Validerung des Feldes Hausnummer
            //Wenn der Wert leer ist soll ein Fehler angezeigt werden.
            if (hausnummer === "") {
                setCustomValidationHausnummer('custom-select is-invalid');
                error = true;
            }
            //Wenn kein Fehler erkannt worden ist, wird das Feld als valid angezeigt
            else {
                setCustomValidationHausnummer('custom-select is-valid');
            }

            //Validerung des Feldes PLZ
            //Wenn der Wert leer ist soll ein Fehler angezeigt werden.
            if (plz === "") {
                setCustomValidationPLZ('custom-select is-invalid');
                error = true;
            }
            //Wenn kein Fehler erkannt worden ist, wird das Feld als valid angezeigt
            else if (plz !== "") {

                // Überprüfe, ob der Text mit "78" beginnt
                const beginntMit78 = plz.startsWith("78");

                // Überprüfe, ob die Länge des Textes nicht mehr als 5 Zeichen beträgt
                const nichtLaengerAls5 = plz.length <= 5;

                // Überprüfe, ob die Länge des Textes nicht mehr als 5 Zeichen beträgt
                const nichtKleinerAls5 = plz.length >= 5;

                // Überprüfe, ob alle Zeichen im Text Zahlen von 1 bis 9 sind
                const nurZahlen1Bis9 = /^[1-9]+$/.test(plz);

                // Gib false zurück, wenn eine der Bedingungen verletzt wurde
                if (beginntMit78 && nichtLaengerAls5 && nichtKleinerAls5 && nurZahlen1Bis9) {
                    setCustomValidationPLZ('custom-select is-valid');
                } else {
                    setCustomValidationPLZ('custom-select is-invalid');
                    error = true;
                }
            }

            //Validerung des Feldes Ort
            //Wenn der Wert leer ist soll ein Fehler angezeigt werden.
            if (ort === "") {
                setCustomValidationOrt('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationOrt('custom-select is-valid');
            }

            //Validerung des Feldes AGB
            //Wenn der Wert false ist soll ein Fehler angezeigt werden.
            if (agb === false) {
                setCustomValidationAGB('custom-select is-invalid');
                error = true;
            }
            //Wenn kein Fehler erkannt worden ist, wird das Feld als valid angezeigt
            else {
                setCustomValidationAGB('custom-select is-valid');
            }

            //Validerung des Feldes Kleiderauswahl
            //Wenn die Länge des Arrays 0 ist, soll ein Fehler angezeigt werden. Ein leeres Array bedeutet es wurde keine Kleidung ausgewählt.
            if (selectedClothes.length == 0) {
                setCustomValidationClothesCount('custom-select is-invalid');
                error = true;
            }
            //Wenn kein Fehler erkannt worden ist, wird das Feld als valid angezeigt
            else {
                setCustomValidationClothesCount('custom-select is-valid');
            }

            //Wurde kein Error gefunden, wird das Formular abgesendet
            if (error) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                alert("Formular erfolgreich abgeschickt");
            }
        }

        //Validerung der Felder wenn die Abholmethode den Wert 2 hat (Abgabe an Geschäftsstelle)
        else if (abholmethode === "2") {

            //Validerung des Feldes Spendengebiet
            //Wenn der Wert leer oder 0 ist soll ein Fehler angezeigt werden.
            if (spendengebiet === "") {
                setCustomValidationSpendengebiet('custom-select is-invalid');
                error = true;
            } else if (spendengebiet === "0") {
                setCustomValidationSpendengebiet('custom-select is-invalid');
                error = true;
            }
            else {
                setCustomValidationSpendengebiet('custom-select is-valid');
            }

            //Validerung des Feldes Kleiderauswahl
            //Wenn die Länge des Arrays 0 ist, soll ein Fehler angezeigt werden. Ein leeres Array bedeutet es wurde keine Kleidung ausgewählt.
            if (selectedClothes.length == 0) {
                setCustomValidationClothesCount('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationClothesCount('custom-select is-valid');
            }

            //Validerung des Feldes AGB
            //Wenn der Wert false ist soll ein Fehler angezeigt werden.
            if (agb === false) {
                setCustomValidationAGB('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationAGB('custom-select is-valid');
            }

            //Wurde ein fehler gefunden wird, wird das Formular nicht abgesendet
            // Wurde ein Fehler gefunden, wird das Formular nicht abgesendet
            if (error) {
                alert("Ein Fehler wurde gefunden!");
                event.preventDefault();
                event.stopPropagation();
            } else {

            }

        }
    };

    //Rendert das Formular
    return (
        //noValidate: Deaktiviert die Standard-Formularvalidierung des Browsers.
        //onSubmit: Die Funktion "handleSubmit" zur Validierung wird aufgerufen
        <Form noValidate onSubmit={handleSubmit}>

            {/*Erste Spalte des Formulars*/}
            {/* className="mb-3": Margin nach unten wird festgelegt */}
            <Row className="mb-3">

                {/* Form.Group: Element um in Bootstrap für Formularkomponenten */}
                {/* as={Col}: Legt fest, dass es sich um eine Spalte handelt */}
                {/* md="4": Option um die Größe des Feldes festzulegen, es werden vier Spalten verwendet */}
                {/* controlId: Eindeutige Kennung des Elements im Formular */}
                <Form.Group as={Col} md="4" controlId="abholmethode">
                    <Form.Label>Wie möchtest du Spenden?</Form.Label>
                    <Form.Select value={abholmethode} onChange={handleSelectChangeAbholmethode}>
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
                    if (abholmethode === "1") {
                        return (
                            <>
                                {/*Zweite Zeile*/}
                                <Row className="mb-3">
                                    {/*Spalte: Vorname*/}
                                    <Form.Group as={Col} md="4" controlId="vorname">
                                        <Form.Label>Vorname</Form.Label>
                                        <Form.Control className={customValidationVorname} value={vorname} onChange={handleTextChangeVorname} type="text" placeholder="Vorname" />
                                        <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                    </Form.Group>

                                    {/*Spalte: Nachname*/}
                                    <Form.Group as={Col} md="4" controlId="nachname">
                                        <Form.Label>Nachname</Form.Label>
                                        <Form.Control className={customValidationNachname} value={nachname} onChange={handleTextChangeNachname} type="text" placeholder="Nachname" />
                                        <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                {/*Dritte Zeile*/}
                                <Row className="mb-3">
                                    {/*Spalte: Straße*/}
                                    <Form.Group as={Col} md="5" controlId="strasse">
                                        <Form.Label>Straße</Form.Label>
                                        <Form.Control className={customValidationStrasse} value={strasse} onChange={handleTextChangeStrasse} type="text" placeholder="Straße" />
                                        <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                    </Form.Group>

                                    {/*Spalte: Hausnummer*/}
                                    <Form.Group as={Col} md="3" controlId="hausnummer">
                                        <Form.Label>Hausnummer</Form.Label>
                                        <Form.Control className={customValidationHausnummer} value={hausnummer} onChange={handleTextChangeHausnummer} type="text" placeholder="Hausnummer" />
                                        <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                {/*Vierte Zeile*/}
                                <Row className="mb-3">
                                    {/*Spalte: Postleitzahl*/}
                                    <Form.Group as={Col} md="2" controlId="plz">
                                        <Form.Label>Postleitzahl</Form.Label>
                                        <Form.Control className={customValidationPLZ} value={plz} onChange={handleTextChangePLZ} type="text" placeholder="PLZ" />
                                        <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                    </Form.Group>

                                    {/*Spalte: Ort*/}
                                    <Form.Group as={Col} md="6" controlId="ort">
                                        <Form.Label>Ort</Form.Label>
                                        <Form.Control className={customValidationOrt} value={ort} onChange={handleTextChangeOrt} type="text" placeholder="Ort" />
                                        <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                {/*Fünfte Zeile*/}
                                <Row className="mb-3">
                                    {/*Spalte: Kriesengebiet*/}
                                    <Form.Group as={Col} md="4" controlId="spendengebiet1">
                                        <Form.Label>Kriesengebiet</Form.Label>
                                        <Form.Select className={customValidationSpendengebiet} value={spendengebiet} onChange={handleSelectChangeKriesengebiet} >
                                            <option value="0">Bitte Wählen</option>
                                            <option value="1">Ukraine</option>
                                            <option value="2">Israel</option>
                                            <option value="3">Malaisya</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                    </Form.Group>

                                    {/*Spalte: Kleidungsstück*/}
                                    <Form.Group as={Col} md="4" controlId="kleidungsauswahl1">
                                        <Kleidungsstück onClothesSelection={handleClothesSelection} />
                                        {/*Read only Feld das den akutellen Wert der Ausgewählten Kleider Enthält*/}
                                        {/*Das Feld ist unsichtbar und dient nur der Evaluierung ob der Wert mindestens 1 ist*/}
                                        <Form.Control style={{ display: 'none' }} className={customValidationClothesCount} value={selectedClothes.length} readOnly />
                                        <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                {/*Sechste Zeile*/}
                                <Row className="mb-3">
                                    {/*Spalte: AGBs*/}
                                    <Form.Group controlId="agb1">
                                        <Form.Check label="Ich habe die AGBs gelsen" className={customValidationAGB} value={agb} onChange={handleCheckBoxChangeAGB} />
                                        <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                {/*Button um das Formular abzusenden*/}
                                <Button className="mb-3" type="submit">Abholung Beauftragen</Button>
                            </>
                        )

                    }
                    //Option für die Abgabe an der Geschäftsstelle    
                    else if (abholmethode === "2") {
                        return (
                            <>
                                {/*Zweite Zeile*/}
                                <Row className="mb-3">
                                    {/*Spalte: Kriesengebiet*/}
                                    <Form.Group as={Col} md="4" controlId="spendengebiet2">
                                        <Form.Label>Kriesengebiet</Form.Label>
                                        <Form.Select className={customValidationSpendengebiet} value={spendengebiet} onChange={handleSelectChangeKriesengebiet} >
                                            <option value="0">Bitte Wählen</option>
                                            <option value="1">Ukraine</option>
                                            <option value="2">Israel</option>
                                            <option value="3">Malaisya</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                    </Form.Group>

                                    {/*Spalte: Kleidungsstück*/}
                                    <Form.Group as={Col} md="4" controlId="kleidungsauswahl2">
                                        <Kleidungsstück onClothesSelection={handleClothesSelection} />
                                        {/*Read only Feld das den akutellen Wert der Ausgewählten Kleider Enthält*/}
                                        {/*Das Feld ist unsichtbar und dient nur der Evaluierung ob der Wert mindestens 1 ist*/}
                                        <Form.Control style={{ display: 'none' }} className={customValidationClothesCount} value={selectedClothes.length} readOnly />
                                        <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                {/*Dritte Zeile*/}
                                <Row className="mb-3">
                                    {/*Spalte: AGBS*/}
                                    <Form.Group controlId="agb2">
                                        <Form.Check label="Ich habe die AGBs gelsen" className={customValidationAGB} value={agb} onChange={handleCheckBoxChangeAGB} />
                                        <Form.Control.Feedback type="invalid">Eingabe prüfen</Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                {/*Button um das Formular abzusenden*/}
                                <Button className="mb-3" type="submit">Spende Abgeben</Button>
                                <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
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

function SpendenInformationen({ vorname, nachname, strasse, hausnummer, plz, ort, spendengebiet, selectedClothes }) {
    return (
        <Alert variant="info">
            <Alert.Heading>Spendeninformationen</Alert.Heading>
            <p>Vorname: {vorname}</p>
            <p>Nachname: {nachname}</p>
            <p>Straße: {strasse}</p>
            <p>Hausnummer: {hausnummer}</p>
            <p>PLZ: {plz}</p>
            <p>Ort: {ort}</p>
            <p>Spendengebiet: {spendengebiet}</p>
            <p>Ausgewählte Kleidungsstücke: {selectedClothes.join(', ')}</p>
        </Alert>
    );
}
