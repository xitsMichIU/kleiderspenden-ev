//Client Komponente wegen der Container Komponente
'use client'

//Importiert die React-Bootstrap Komponenten
import { Container } from "react-bootstrap";

//Importiert die CSS Datei
import "/app/style.css"

//Importiert die eigenen Komponenten
import Formular from "@/components/from";
import Manual from "@/components/manual";

export default function Donate() {
    return (
        <Container fluid>
            <h1>Spenden Sie jetzt!</h1>
            <p>Benötigen Sie eine Anleitung?</p>
            <div className="mb-2">
                <Manual />
            </div>
            <h3 >Hier registrieren, um zu spenden</h3>
            <Formular />
        </Container >
    );
}

