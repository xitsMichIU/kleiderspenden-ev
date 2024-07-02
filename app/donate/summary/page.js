// Client Komponente wegen "Use State"
"use client";

// Importiert die benötigten Methoden und Komponenten
// Suspense Komponente wird benötigt um einen Fehler zu Verhindern.
//https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout

import { useSearchParams } from "next/navigation";
import React, { Suspense, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

//Importiert die CSS Datei.
import "/app/style.css"

export default function Summary() {

    //Variablen deklarieren.
    let anrede, anredeText, vorname, nachname, strasse, hausnummer, plz, ort, spendengebiet, spendengebietText, kleidung, abholmethode, email, telefonnummer;

    //Variable welche die übergebenen Parameter aus der URL ausliest.
    const searchParams = useSearchParams();

    //Variable welche das aktuelle Datum enthält
    const [currentDateTime] = useState(new Date());

    //Auslesen der Parameter raus der URL.
    abholmethode = searchParams.get("abholmethode");
    vorname = searchParams.get("vorname");
    nachname = searchParams.get("nachname");
    strasse = searchParams.get("strasse");
    hausnummer = searchParams.get("hausnummer");
    plz = searchParams.get("plz");
    ort = searchParams.get("ort");
    kleidung = searchParams.get("kleidung");
    spendengebiet = parseInt(searchParams.get("spendengebiet"));
    email = searchParams.get("email");
    telefonnummer = searchParams.get("telefonnummer");
    anrede = parseInt(searchParams.get("anrede"));

    //Formatiert die Ausgabe der Kleidungsauswahl. Es wird ein Leerzeichen nach den Komma eingefügt. 
    kleidung = formatiereAusgabe(kleidung);


    switch (spendengebiet) {
        case 1:
            spendengebietText = "Ukraine";
            break;
        case 2:
            spendengebietText = "Israel";
            break;
        case 3:
            spendengebietText = "Malaysia";
            break;
        default:
            spendengebietText = "";
    }

    switch (anrede) {
        case 1:
            anredeText = "Herr";
            break;
        case 2:
            anredeText = "Frau";
            break;
        case 3:
            anredeText = "Divers";
            break;
        default:
            anredeText = "";
    }

    return (
        <Container>
            <Suspense>
                {abholmethode === "1" ? (
                    <div>
                        <h1>Abholung erfolgreich beauftragt!</h1>
                        <h3>Vielen Dank, {anredeText} {nachname}!</h3>
                        <p>Wir sehen uns bei der Abholung! Nachfolgend eine Übersicht ihrer übermittelten Daten.</p>
                        <Row>
                            <Col>
                                <h3>Persönliche Angaben im Überblick:</h3>
                                <ul>
                                    <li><strong>Anrede:</strong> {anredeText}</li>
                                    <li><strong>Name:</strong> {vorname} {nachname}</li>
                                    <li><strong>Adresse:</strong> {strasse} {hausnummer}, {plz} {ort}</li>
                                    <li><strong>Email Adresse:</strong> {email}</li>
                                    <li><strong>Telefonnummer:</strong> {telefonnummer}</li>
                                </ul>

                                <h3>Spenden Details:</h3>
                                <ul>
                                    <li><strong>Spendengebiet:</strong> {spendengebietText}</li>
                                    <li><strong>Gespendete Kleidung:</strong> {kleidung}</li>
                                    <li><strong>Zeitpunkt der Beauftragung</strong> {currentDateTime.toLocaleString()}</li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                ) : (
                    abholmethode === "2" ? (
                        <div>
                            <h1>Abgabe erfolgreich!</h1>
                            <p>Vielen Dank, {anredeText} {nachname}!</p>
                            <Row>
                                <Col>
                                    <h3>Persönliche Angaben im Überblick:</h3>
                                    <ul>
                                        <li><strong>Anrede:</strong> {anredeText}</li>
                                        <li><strong>Name:</strong> {vorname} {nachname}</li>
                                    </ul>

                                    <h3>Spenden Details:</h3>
                                    <ul>
                                        <li><strong>Spendengebiet:</strong> {spendengebietText}</li>
                                        <li><strong>Gespendete Kleidung:</strong> {kleidung}</li>
                                        <li><strong>Zeitpunkt der Abgabe:</strong> {currentDateTime.toLocaleString()}</li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    ) : null
                )}
            </Suspense>
        </Container>
    );
}

//Die Funktion formatiert die Ausgabe der Kleidung, da standardmäßig das Array ohne Leerzeichen für die Kommata ausgegeben wird.
function formatiereAusgabe(gewaehlteKleidung) {

    const kleidungsstuecke = gewaehlteKleidung.split(',');
    let text = '';

    for (let i = 0; i < kleidungsstuecke.length; i++) {
        // Leerzeichen am Anfang und Ende des Worts entfernen, falls vorhanden.
        const kleidungsstueck = kleidungsstuecke[i].trim();

        // Für das erste Wort wird kein Leerzeichen vor dem Komma benötigt.
        if (i === 0) {
            text += kleidungsstueck;
        } else {
            text += ` ${kleidungsstueck}`;
        }

        // Nach dem letzten Wort soll kein Leerzeichen hinter dem Komma eingefügt werden.
        if (i !== kleidungsstuecke.length - 1) {
            text += ',';
        }
    }

    return text;
}
