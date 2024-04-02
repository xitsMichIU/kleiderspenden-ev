//Client Komponente um die CSS Datei zu lesen
'use client'

import { Container } from "react-bootstrap";
//Importiert die CSS Datei
import "/app/style.css"

//Import der benötigten React-Komponenten
import React from "react"

export default function Home() {
  return (
    <Container fluid>
      <h1>Wilkommen beim Kleiderspenden E.V</h1>
      <p>Der Kleiderspenden E.V aus Singen hat sich der Logistik von Kleiderspenden verschrieben. Unser Ziel ist es
        Kleiderspenden entgegen zu nehmen und an bedürtige in Kriesengebieten zu verteilen. Spenden Sie jetzt ihre Kleidung die sie nicht länger benötigten und Helfen sie Menschen in Not.
        Sie können eine Kleiderspende bei uns im Vereinsheim abgeben oder durch unser Sammelfahrzeug bei ihnen Zuhause Abholen lassen. </p>
    </Container>
  );
}
