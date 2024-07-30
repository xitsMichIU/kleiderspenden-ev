//Client Komponente um die CSS Datei zu lesen
'use client'

//Importiert die Benötigten React Komponenten
import React from "react"

//Importiert die Benötigten React-Bootstrap Komponenten
import { Container } from "react-bootstrap"

//Importiert die CSS Datei
import "/app/style.css"

export default function Imprint() {
    return (
        <Container fluid>
            <h1>Impressum</h1>
            <p><strong>Organisationsname:</strong> Kleiderspenden e.V.</p>
            <p><strong>Adresse:</strong> Schaffhauser Str. 60, 78224 Singen am Hohentwiel</p>
            <p><strong>Telefon:</strong> 07733/5112345</p>
            <p><strong>E-Mail:</strong> info@kleiderspenden.org</p>
            <p><strong>Vertretungsberechtigte Personen:</strong> Michael Geigges (Geschäftsführer)</p>
            <p><strong>Registergericht:</strong> Amtsgericht Singen</p>
            <p><strong>Registernummer:</strong> HRB12345</p>
            <p><strong>Umsatzsteuer-ID:</strong> DE123456789</p>
        </Container>
    );
}
