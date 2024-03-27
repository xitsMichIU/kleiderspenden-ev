// Client Komponente wegen "Use State"
"use client";

// Importiert die benötigten Methoden und Komponenten
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "/app/style.css";

export default function Test() {

    let anrede, vorname, nachname, strasse, hausnummer, plz, ort, spendegebiet, kleidung, abholmethode, email, phone;
    const searchParams = useSearchParams();

    const [currentDateTime] = useState(new Date());

    // Variablen innerhalb des Blocks initialisieren, um den "scope" nicht zu verlassen

    anrede = searchParams.get("anrede");
    abholmethode = searchParams.get("abholmethode");
    vorname = searchParams.get("vorname");
    nachname = searchParams.get("nachname");
    strasse = searchParams.get("strasse");
    hausnummer = searchParams.get("hausnummer");
    plz = searchParams.get("plz");
    ort = searchParams.get("ort");
    spendegebiet = searchParams.get("spendegebiet");
    kleidung = searchParams.get("kleidung");
    spendegebiet = searchParams.get("spendegebiet");
    kleidung = searchParams.get("kleidung");
    email = searchParams.get("email");
    phone = searchParams.get("phone");

    return (
        <>
            {abholmethode === "1" ? (
                <div>
                    <h1>Abholung erfolgreich beauftragt!</h1>
                    <p>Vielen Dank, {anrede} {nachname}!</p>
                    <p>Wir sehen uns bei der Abholung!</p>
                    <Row>
                        <Col>
                            <h3>Persönliche Angaben im Überblick:</h3>
                            <ul>
                                <li><strong>Anrede:</strong> {anrede}</li>
                                <li><strong>Name:</strong> {vorname} {nachname}</li>
                                <li><strong>Adresse:</strong> {strasse} {hausnummer}, {plz} {ort}</li>
                                <li><strong>Email Adresse:</strong> {email}</li>
                                <li><strong>Telefonnummer:</strong> {phone}</li>
                            </ul>

                            <h3>Spenden Details:</h3>
                            <ul>
                                <li><strong>Spendengebiet:</strong> {spendegebiet}</li>
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
                        <p>Vielen Dank, {anrede} {nachname}!</p>
                        <Row>
                            <Col>
                                <h3>Persönliche Angaben im Überblick:</h3>
                                <ul>
                                    <li><strong>Anrede:</strong> {anrede}</li>
                                    <li><strong>Name:</strong> {vorname} {nachname}</li>
                                    <li><strong>Email Adresse:</strong> {email}</li>
                                    <li><strong>Telefonnummer:</strong> {phone}</li>
                                </ul>

                                <h3>Spenden Details:</h3>
                                <ul>
                                    <li><strong>Spendengebiet:</strong> {spendegebiet}</li>
                                    <li><strong>Gespendete Kleidung:</strong> {kleidung}</li>
                                    <li><strong>Datum und Uhrzeit:</strong> {currentDateTime.toLocaleString()}</li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                ) : null
            )}

        </>
    );
}


function DateTimeComponent() {
    const [currentDateTime] = useState(new Date());

    return (
        <div>
            <p><strong>Datum und Uhrzeit: </strong>{currentDateTime.toLocaleString()}</p>
        </div>
    );
}
