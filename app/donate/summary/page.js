// Client Komponente wegen "Use State"
"use client";

// Importiert die benötigten Methoden und Komponenten
// Suspense Komponente wird benötigt um einen fehler zu Verhindern.
//https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout

import { useSearchParams } from "next/navigation";
import React, { Suspense, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

//Importiert die CSS Datei
import "/app/style.css"

export default function Summary() {

    //Variablen initaliseren 
    let anrede, anredeText, vorname, nachname, strasse, hausnummer, plz, ort, spendegebiet, spendegebietText, kleidung, abholmethode, email, phone;

    //Variable welche die übergebenen Parameter aus der URL ausliest
    const searchParams = useSearchParams();

    //Variable welche das aktuelle Datum enthält
    const [currentDateTime] = useState(new Date());

    //Auslesen der Parameter raus der URL

    abholmethode = searchParams.get("abholmethode");
    vorname = searchParams.get("vorname");
    nachname = searchParams.get("nachname");
    strasse = searchParams.get("strasse");
    hausnummer = searchParams.get("hausnummer");
    plz = searchParams.get("plz");
    ort = searchParams.get("ort");
    kleidung = searchParams.get("kleidung");
    spendegebiet = searchParams.get("spendegebiet");
    kleidung = searchParams.get("kleidung");
    email = searchParams.get("email");
    phone = searchParams.get("phone");
    anrede = parseInt(searchParams.get("anrede"));
    spendegebiet = parseInt(searchParams.get("anrede"));

    switch (spendegebiet) {
        case 1:
            spendegebietText = "Ukraine";
            break;
        case 2:
            spendegebietText = "Israel";
            break;
        case 3:
            spendegebietText = "Malaysia";
            break;
        default:
            spendegebietText = "";
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
        <Suspense>
            {abholmethode === "1" ? (
                <div>
                    <h1>Abholung erfolgreich beauftragt!</h1>
                    <p>Vielen Dank, {anredeText} {nachname}!</p>
                    <p>Wir sehen uns bei der Abholung!</p>
                    <Row>
                        <Col>
                            <h3>Persönliche Angaben im Überblick:</h3>
                            <ul>
                                <li><strong>Anrede:</strong> {anredeText}</li>
                                <li><strong>Name:</strong> {vorname} {nachname}</li>
                                <li><strong>Adresse:</strong> {strasse} {hausnummer}, {plz} {ort}</li>
                                <li><strong>Email Adresse:</strong> {email}</li>
                                <li><strong>Telefonnummer:</strong> {phone}</li>
                            </ul>

                            <h3>Spenden Details:</h3>
                            <ul>
                                <li><strong>Spendengebiet:</strong> {spendegebietText}</li>
                                <li><strong>Gespendete Kleidung:</strong> {kleidung}</li>
                                <li><strong>Datum und Uhrzeit:</strong> {currentDateTime.toLocaleString()}</li>
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
                                    <li><strong>Email Adresse:</strong> {email}</li>
                                    <li><strong>Telefonnummer:</strong> {phone}</li>
                                </ul>

                                <h3>Spenden Details:</h3>
                                <ul>
                                    <li><strong>Spendengebiet:</strong> {spendegebietText}</li>
                                    <li><strong>Gespendete Kleidung:</strong> {kleidung}</li>
                                    <li><strong>Datum und Uhrzeit:</strong> {currentDateTime.toLocaleString()}</li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                ) : null
            )}
        </Suspense>
    );
}


