//Client Komponente um die CSS Datei zu lesen
'use client'

//Importiert die benötigte CSS Datei
import React from "react"

import { Container } from "react-bootstrap"

//Importiert die CSS Datei
import "/app/style.css"

export default function Privacy() {
    return (
        <Container fluid>
            <h1>Datenschutzerklärung</h1>
        </Container>
    );
}
