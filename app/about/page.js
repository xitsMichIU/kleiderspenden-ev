//Client Komponente um die CSS Datei zu lesen
'use client'

//Importiert die benötigte CSS Datei
import React from "react"

//Importiert die CSS Datei
import "/app/style.css"
import { Container } from "react-bootstrap";

export default function About() {
    return (
        <Container fluid>
            <h1>Kleiderspenden E.V</h1>
            <p>Wir sind ein Verein der sich der Organisation und Logistik von Kleiderspenen verschrieben hat.</p>
            <h2>Anschrift der Geschäftststelle</h2>

        </Container>
    );
}