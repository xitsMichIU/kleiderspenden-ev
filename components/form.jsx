//Das Formular wird als client Komponente behandelt.
'use client'

//Import der benötigten React Methoden.
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

//Import der benötigten React-Bootstrap Komponenten.
import { Button, Col, Form, Row } from 'react-bootstrap';

//Import eigener Komponenten
import Clothes from './clothes';

//Formular für das registrieren einer Kleiderspende.
export default function Formular() {

    //Auswahl der Abholmethode, default Wert wird auf 0 für "Bitte wählen" festgelegt.
    const [abholmethode, setAbholmethode] = useState(0);

    //Funktion die den Wechsel der Abholmethode behandelt.
    const handleSelectChangeAbholmethode = (e) => {

        //Bei einem Wechsel der Methode wird der Wert des Auswahlfeldes aktualisiert.
        setAbholmethode(e.target.value);

        //Wird die Methode gewechselt müssen bestehende Warnungen zurückgesetzt werden.
        setCustomValidationKrisenregion('custom-select');
        setCustomValidationVorname('custom-select');
        setCustomValidationNachname('custom-select');
        setCustomValidationStrasse('custom-select');
        setCustomValidationHausnummer('custom-select');
        setCustomValidationPLZ('custom-select');
        setCustomValidationOrt('custom-select');
        setCustomValidationDataPrivacy('custom-select');
        setCustomValidationAnzahlKleider('custom-select');
        setCustomValidationAnrede('custom-select');
        setCustomValidationEmail('custom-select');
        setCustomValidationTelefonnummer('custom-select');

        //Die Variablen bei einem Wechsel ebenfalls zurückgesetzt.
        setKrisenregion("");
        setVorname("");
        setNachname("");
        setStrasse("");
        setHausnummer("");
        setPLZ("");
        setOrt("");
        setDataPrivacy(false);

        setGewaehlteKleidung("");
        setAnrede("");
        setEmail("");
        setTelefonnummer("");
    };

    //Use State Methoden der Variablen aller Felder.
    const [anrede, setAnrede] = useState("");
    const [spendengebiet, setKrisenregion] = useState("");
    const [vorname, setVorname] = useState("");
    const [nachname, setNachname] = useState("");
    const [strasse, setStrasse] = useState("");
    const [hausnummer, setHausnummer] = useState("");
    const [plz, setPLZ] = useState("");
    const [ort, setOrt] = useState("");
    const [dataPrivacy, setDataPrivacy] = useState(false);
    const [gewaehlteKleidung, setGewaehlteKleidung] = useState([]);
    const [telefonnummer, setTelefonnummer] = useState("");
    const [email, setEmail] = useState("");

    const [customValidationVorname, setCustomValidationVorname] = useState();
    const [customValidationNachname, setCustomValidationNachname] = useState();
    const [customValidationKrisenregion, setCustomValidationKrisenregion] = useState();
    const [customValidationAnrede, setCustomValidationAnrede] = useState();
    const [customValidationStrasse, setCustomValidationStrasse] = useState();
    const [customValidationHausnummer, setCustomValidationHausnummer] = useState();
    const [customValidationPLZ, setCustomValidationPLZ] = useState();
    const [customValidationOrt, setCustomValidationOrt] = useState();
    const [customValidationDataPrivacy, setCustomValidationDataPrivacy] = useState();
    const [customValidationAnzahlKleider, setCustomValidationAnzahlKleider] = useState();
    const [customValidationTelefonnummer, setCustomValidationTelefonnummer] = useState();
    const [customValidationEmail, setCustomValidationEmail] = useState();

    //Methoden die eine Eingabe im Formular verarbeiten.
    const handleSelectChangeAnrede = (e) => setAnrede(e.target.value);
    const handleSelectChangeKrisenregion = (e) => setKrisenregion(e.target.value);
    const handleTextChangeVorname = (e) => setVorname(e.target.value);
    const handleTextChangeNachname = (e) => setNachname(e.target.value);
    const handleTextChangeStrasse = (e) => setStrasse(e.target.value);
    const handleTextChangeHausnummer = (e) => setHausnummer(e.target.value);
    const handleTextChangePLZ = (e) => setPLZ(e.target.value);
    const handleTextChangeOrt = (e) => setOrt(e.target.value);
    const handleCheckBoxChangeDataPrivacy = (e) => setDataPrivacy(e.target.checked);
    const handleKleidungsAuswahl = (uebergebeneKleidung) => setGewaehlteKleidung(uebergebeneKleidung);
    const handleTextChangeTelefonnummer = (e) => setTelefonnummer(e.target.value);
    const handleTextChangeEmail = (e) => setEmail(e.target.value);

    //Router für die Navigation auf die Übersichtsseite.
    const router = useRouter();

    //Funktion zur Validierung der Formulardaten.
    const handleSubmit = (event) => {


        //Variable Error dient zur feststellung, ob bei einem der Felder Daten fehlen / falsch sind.
        var error = false;

        //Validierung der Felder wenn die Abholmethode 1 (Abholung durch Sammelfahrzeug) ausgewählt wurde.
        if (abholmethode === "1") {

            //Validierung des Feldes Krisenregion.
            if (spendengebiet === "") {
                setCustomValidationKrisenregion('custom-select is-invalid');
                error = true;
            } else if (spendengebiet === "0") {
                setCustomValidationKrisenregion('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationKrisenregion('custom-select is-valid');
            }

            //Validierung des Feldes Anrede.
            if (anrede === "") {
                setCustomValidationAnrede('custom-select is-invalid');
                error = true;
            } else if (anrede === "0") {
                setCustomValidationAnrede('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationAnrede('custom-select is-valid');
            }

            //Validierung des Feldes Vorname.
            if (vorname === "") {
                setCustomValidationVorname('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationVorname('custom-select is-valid');
            }

            //Validierung des Feldes Nachname.
            if (nachname === "") {
                setCustomValidationNachname('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationNachname('custom-select is-valid');
            }

            //Validierung des Feldes Straße.
            if (strasse === "") {
                setCustomValidationStrasse('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationStrasse('custom-select is-valid');
            }

            //Validierung des Feldes Hausnummer.
            if (hausnummer === "") {
                setCustomValidationHausnummer('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationHausnummer('custom-select is-valid');
            }

            //Validierung des Feldes PLZ.
            if (plz === "") {
                setCustomValidationPLZ('custom-select is-invalid');
                error = true;
            } else if (plz !== "") {

                //Überprüft ob der Text mit "78" beginnt.
                const beginntMit78 = plz.startsWith("78");

                //Überprüft, ob die Länge des Textes nicht mehr als 5 Zeichen beträgt.
                const nichtLaengerAls5 = plz.length <= 5;

                //Überprüft, ob die Länge des Textes nicht mehr als 5 Zeichen beträgt.
                const nichtKleinerAls5 = plz.length >= 5;

                //Überprüft, ob alle Zeichen im Text Zahlen von 1 bis 9 sind.
                const nurZahlen1Bis9 = /^[0-9]+$/.test(plz);

                //Wenn eine der Bedingungen falsch ist wird ein Fehler angezeigt.
                if (beginntMit78 && nichtLaengerAls5 && nichtKleinerAls5 && nurZahlen1Bis9) {
                    setCustomValidationPLZ('custom-select is-valid');
                } else {
                    setCustomValidationPLZ('custom-select is-invalid');
                    error = true;
                }
            }

            //Validierung des Feldes Ort.
            if (ort === "") {
                setCustomValidationOrt('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationOrt('custom-select is-valid');
            }

            //Validierung des Feldes DataPrivacy.
            if (dataPrivacy === false) {
                setCustomValidationDataPrivacy('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationDataPrivacy('custom-select is-valid');
            }

            //Validierung des Feldes Kleiderauswahl.
            if (gewaehlteKleidung.length == 0) {
                setCustomValidationAnzahlKleider('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationAnzahlKleider('custom-select is-valid');
            }

            //Validierung des Feldes Telefonnummer.
            if (telefonnummer == "") {
                setCustomValidationTelefonnummer('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationTelefonnummer('custom-select is-valid');
            }

            //Validierung des Feldes Email.
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

            if (emailRegex.test(email) === false) {
                setCustomValidationEmail('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationEmail('custom-select is-valid');
            }

            //Wurde kein Fehler gefunden, wird das Formular abgesendet.
            if (error) {
                //Verhindert, dass das Formular Abgesendet werden kann.
                event.preventDefault();
                event.stopPropagation();
            } else {
                //Verhindern, dass das Formular neu geladen wird.
                event.preventDefault();

                //URL zur Übergabe der Variablen wird erstellt.
                const url = `/donate/summary?&anrede=${anrede}&vorname=${vorname}&nachname=${nachname}&strasse=${strasse}&hausnummer=${hausnummer}&plz=${plz}&ort=${ort}&spendengebiet=${spendengebiet}&kleidung=${gewaehlteKleidung}&abholmethode=${abholmethode}&email=${email}&telefonnummer=${telefonnummer}`;

                //Weiterleitung zur Übersichtsseite
                router.push(url);

            }
        }

        //Validierung der Felder wenn die Abholmethode den Wert 2 hat (Abgabe an Geschäftsstelle).
        else if (abholmethode === "2") {

            //Validierung des Feldes Anrede.
            if (anrede === "") {
                setCustomValidationAnrede('custom-select is-invalid');
                error = true;
            } else if (anrede === "0") {
                setCustomValidationAnrede('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationAnrede('custom-select is-valid');
            }

            //Validierung des Feldes Vorname.
            if (vorname === "") {
                setCustomValidationVorname('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationVorname('custom-select is-valid');
            }

            //Validierung des Feldes Nachname.
            if (nachname === "") {
                setCustomValidationNachname('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationNachname('custom-select is-valid');
            }

            //Validierung des Feldes Krisenregion.
            if (spendengebiet === "") {
                setCustomValidationKrisenregion('custom-select is-invalid');
                error = true;
            } else if (spendengebiet === "0") {
                setCustomValidationKrisenregion('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationKrisenregion('custom-select is-valid');
            }

            //Validierung des Feldes Kleiderauswahl.
            if (gewaehlteKleidung.length == 0) {
                setCustomValidationAnzahlKleider('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationAnzahlKleider('custom-select is-valid');
            }

            //Validierung des Feldes DataPrivacy.
            if (dataPrivacy === false) {
                setCustomValidationDataPrivacy('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationDataPrivacy('custom-select is-valid');
            }

            //Validierung des Feldes Telefonnummer.
            if (telefonnummer == "") {
                setCustomValidationTelefonnummer('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationTelefonnummer('custom-select is-valid');
            }

            //Validierung des Feldes Email.
            if (email == "") {
                setCustomValidationEmail('custom-select is-invalid');
                error = true;
            } else {
                setCustomValidationEmail('custom-select is-valid');
            }

            //Wurde ein Fehler gefunden wird, wird das Formular nicht abgesendet.
            if (error) {
                //Verhindern, dass das Formular Abgesendet werden kann.
                event.preventDefault();
                event.stopPropagation();
            } else {
                //Verhindern, dass das Formular neu geladen wird.
                event.preventDefault();

                //Erstellen der URL die alle Variablen enthält.
                const url = `/donate/summary?&anrede=${anrede}&vorname=${vorname}&nachname=${nachname}&spendengebiet=${spendengebiet}&kleidung=${gewaehlteKleidung}&abholmethode=${abholmethode}&email=${email}&telefonnummer=${telefonnummer}`;

                //Weiterleitung zur Übersichtsseite.
                router.push(url);
            }
        }
    };

    //Formular Erstellung
    return (
        <>
            <Form noValidate onSubmit={handleSubmit}>
                <Row>
                    <Form.Group className="mb-2" as={Col} xs={12} md={6} lg={6} controlId="abholmethode">
                        <Form.Label>Wie möchten Sie spenden?</Form.Label>
                        <Form.Select value={abholmethode} onChange={handleSelectChangeAbholmethode}>
                            <option>Bitte wählen</option>
                            <option value="1">Abholung durch Sammelfahrzeug</option>
                            <option value="2">Abgabe an der Geschäftsstelle</option>
                        </Form.Select>
                    </Form.Group>
                </Row >

                <>
                    {(() => {
                        //Option 1 bedeutet dass eine Abholung mit dem Sammelfahrzeug erfolgt.
                        if (abholmethode === "1") {
                            return (
                                <>
                                    <Row>
                                        <Form.Group className="mb-2" as={Col} xs={12} md={3} lg={3} controlId="anrede">
                                            <Form.Label>Anrede</Form.Label>
                                            <Form.Select className={customValidationAnrede} value={anrede} onChange={handleSelectChangeAnrede}>
                                                <option value="0">Bitte wählen</option>
                                                <option value="1">Herr</option>
                                                <option value="2">Frau</option>
                                                <option value="3">Divers</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>

                                    <Row>
                                        <Form.Group className="mb-2" as={Col} xs={12} md={6} lg={6} controlId="vorname">
                                            <Form.Label>Vorname</Form.Label>
                                            <Form.Control className={customValidationVorname} value={vorname}
                                                onChange={handleTextChangeVorname} type="text" placeholder="Vorname" />
                                            <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-2" as={Col} xs={12} md={6} lg={6} controlId="nachname">
                                            <Form.Label>Nachname</Form.Label>
                                            <Form.Control className={customValidationNachname} value={nachname} onChange={handleTextChangeNachname} type="text" placeholder="Nachname" />
                                            <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row >

                                    <Row>
                                        <Form.Group className="mb-2" as={Col} xs={12} md={9} lg={9} controlId="strasse" >
                                            <Form.Label>Straße</Form.Label>
                                            <Form.Control className={customValidationStrasse} value={strasse} onChange={handleTextChangeStrasse} type="text" placeholder="Straße" />
                                            <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-2" as={Col} xs={12} md={3} lg={3} controlId="hausnummer">
                                            <Form.Label>Hausnummer</Form.Label>
                                            <Form.Control className={customValidationHausnummer} value={hausnummer} onChange={handleTextChangeHausnummer} type="text" placeholder="Hausnummer" />
                                            <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>

                                    <Row>
                                        <Form.Group className="mb-2" as={Col} xs={12} md={3} lg={3} controlId="plz">
                                            <Form.Label>Postleitzahl</Form.Label>
                                            <Form.Control className={customValidationPLZ} value={plz} onChange={handleTextChangePLZ} type="text" placeholder="PLZ" />
                                            <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-2" as={Col} xs={12} md={9} lg={9} controlId="ort">
                                            <Form.Label>Ort</Form.Label>
                                            <Form.Control className={customValidationOrt} value={ort} onChange={handleTextChangeOrt} type="text" placeholder="Ort" />
                                            <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>

                                    <Row>
                                        <Form.Group className="mb-2" as={Col} xs={12} md={8} lg={8} controlId="email">
                                            <Form.Label>Email Adresse</Form.Label>
                                            <Form.Control className={customValidationEmail} value={email} onChange={handleTextChangeEmail} type="email" placeholder="Email" />
                                        </Form.Group>
                                        <Form.Group className="mb-2" as={Col} xs={12} md={4} lg={4} controlId="telefon">
                                            <Form.Label>Telefonnummer</Form.Label>
                                            <Form.Control className={customValidationTelefonnummer} value={telefonnummer} onChange={handleTextChangeTelefonnummer} type="text" placeholder="Telefonnummer" />
                                            <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>

                                    <Row>
                                        <Form.Group className="mb-2" as={Col} xs={6} md={6} lg={6} controlId="spendengebiet1">
                                            <Form.Label>Krisenregion</Form.Label>
                                            <Form.Select className={customValidationKrisenregion} value={spendengebiet} onChange={handleSelectChangeKrisenregion} >
                                                <option value="0">Bitte wählen</option>
                                                <option value="1">Ukraine</option>
                                                <option value="2">Israel</option>
                                                <option value="3">Malaysia</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-2" as={Col} xs={6} md={6} lg={6} controlId="kleidungsauswahl1">
                                            <Clothes onClothesSelection={handleKleidungsAuswahl} />
                                            {/*Read only Feld das den aktuellen Wert der Ausgewählten Kleider Enthält*/}
                                            {/*Das Feld ist unsichtbar und dient nur der Evaluierung ob der Wert das Arrays mindestens 1 ist*/}
                                            <Form.Control style={{ display: 'none' }} className={customValidationAnzahlKleider} value={gewaehlteKleidung.length} readOnly />
                                            <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>

                                    <Row>
                                        <Form.Group className="mb-2" controlId="dataPrivacy1">
                                            <Form.Check label="Ich stimme der Verarbeitung meiner Daten zu." className={customValidationDataPrivacy} value={dataPrivacy} onChange={handleCheckBoxChangeDataPrivacy} />
                                            <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Button type="submit" className="mb-3">Abholung beauftragen</Button>
                                </>
                            )

                        }
                        //Option für die Abgabe an der Geschäftsstelle    
                        else if (abholmethode === "2") {
                            return (
                                <>
                                    <Row>
                                        <Form.Group className="mb-2" as={Col} xs={12} md={3} lg={3} controlId="anrede">
                                            <Form.Label>Anrede</Form.Label>
                                            <Form.Select className={customValidationAnrede} value={anrede} onChange={handleSelectChangeAnrede}>
                                                <option value="0">Bitte wählen</option>
                                                <option value="1">Herr</option>
                                                <option value="2">Frau</option>
                                                <option value="3">Divers</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>

                                    <Row>
                                        <Form.Group className="mb-2" as={Col} xs={12} md={6} lg={6} controlId="vorname">
                                            <Form.Label>Vorname</Form.Label>
                                            <Form.Control className={customValidationVorname} value={vorname} onChange={handleTextChangeVorname} type="text" placeholder="Vorname" />
                                            <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-2" as={Col} xs={12} md={6} lg={6} controlId="nachname">
                                            <Form.Label>Nachname</Form.Label>
                                            <Form.Control className={customValidationNachname} value={nachname} onChange={handleTextChangeNachname} type="text" placeholder="Nachname" />
                                            <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>

                                    <Row>
                                        <Form.Group className="mb-2" as={Col} xs={12} md={8} lg={8} controlId="email">
                                            <Form.Label>Email Adresse</Form.Label>
                                            <Form.Control className={customValidationEmail} value={email} onChange={handleTextChangeEmail} type="email" placeholder="Email" />
                                            <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-2" as={Col} xs={12} md={4} lg={4} controlId="telefon">
                                            <Form.Label>Telefonnummer</Form.Label>
                                            <Form.Control className={customValidationTelefonnummer} value={telefonnummer} onChange={handleTextChangeTelefonnummer} type="text" placeholder="Telefonnummer" />
                                            <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>

                                    <Row>
                                        <Form.Group className="mb-2" as={Col} xs={6} md={6} lg={6} controlId="spendengebiet2">
                                            <Form.Label>Krisenregion</Form.Label>
                                            <Form.Select className={customValidationKrisenregion} value={spendengebiet} onChange={handleSelectChangeKrisenregion} >
                                                <option value="0">Bitte wählen</option>
                                                <option value="1">Ukraine</option>
                                                <option value="2">Israel</option>
                                                <option value="3">Malaysia</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-2" as={Col} xs={6} md={6} lg={6} controlId="kleidungsauswahl2">
                                            {/* Die handleKleidungsAuswahl-Funktion wird als Prop an die Kleidungskomponente übergeben. 
                                            Sobald sich die Kleidungsauswahl ändert, wird mit useEffect in der Kleidungskomponente die Prop aufgerufen und die Funktion "handleKleidungsAuswahl" ausgeführt, 
                                            welche die Variable "gewaehlteKleidung" mit den neuesten Werten aktualisiert. */}
                                            <Clothes onClothesSelection={handleKleidungsAuswahl} />
                                            {/*Read only Feld das den aktuellen Wert der Ausgewählten Kleider Enthält*/}
                                            {/*Das Feld ist unsichtbar und dient nur der Evaluierung ob der Wert mindestens 1 ist*/}
                                            <Form.Control style={{ display: 'none' }} className={customValidationAnzahlKleider} value={gewaehlteKleidung.length} readOnly />
                                            <Form.Control.Feedback type="invalid">Eingabe prüfen!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>

                                    <Row>
                                        <Form.Group className="mb-2" controlId="dataPrivacy2">
                                            <Form.Check label="Ich stimme der Verarbeitung meiner Daten zu." className={customValidationDataPrivacy} value={dataPrivacy} onChange={handleCheckBoxChangeDataPrivacy} />
                                            <Form.Control.Feedback type="invalid">Eingabe prüfen</Form.Control.Feedback>
                                            <Form.Control.Feedback type="valid">Eingabe korrekt!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Button type="submit" className="mb-3">Abgabe registrieren</Button>
                                </>
                            )
                        } else {
                            return null;
                        }
                    })()}
                </>
            </Form >
        </>
    );
}