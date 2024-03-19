// Client Komponente wegen "Use State"
"use client";

// Importiert die benötigten Methoden und Komponenten
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "/app/style.css";

export default function Test() {

    let anrede, vorname, nachname, strasse, hausnummer, plz, ort, spendegebiet, kleidung, abholmethode;
    const searchParams = useSearchParams();

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

    return (
        <>
            {abholmethode === "1" ? (
                <div className="pickup-success">
                    <h2>Abholung erfolgreich beauftragt!</h2>
                    <p>Vielen Dank, {anrede} {nachname}!</p>
                    <p>Wir sehen uns Morgen zur Abholung!</p>
                    <Row>
                        <Col className="mb-3">
                            <h3><strong>Angaben im Überblick:</strong></h3>
                            <p><strong>Anrede:</strong> {anrede}</p>
                            <p><strong>Name:</strong> {vorname} {nachname}</p>
                            <p><strong>Adresse:</strong> {strasse} {hausnummer}, {plz} {ort}</p>
                            <p><strong>Spendengebiet:</strong> {spendegebiet}</p>
                            <p><strong>Kleidung:</strong> {kleidung}</p>
                            <DateTimeComponent />
                        </Col>
                    </Row>
                </div>
            ) : (
                abholmethode === "2" ? (
                    <div className="donation-success">
                        <h2>Vielen Dank für deine Spende!</h2>
                        <Row>
                            <Col>
                                <p><strong>Spendengebiet:</strong> {spendegebiet}</p>
                                <p><strong>Kleidung:</strong> {kleidung}</p>
                                <p><strong>Datum und Uhrzeit:</strong> <DateTimeComponent /></p>
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
            <p><strong>Aufrag wurde erteilt am: </strong>{currentDateTime.toLocaleString()}</p>
        </div>
    );
}
