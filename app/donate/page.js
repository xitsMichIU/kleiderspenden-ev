//Client Komponente wegen "Use State"
"use client";

//Importiert die benötigten Methoden und Komponenten
import { useState } from "react";

import Formular from "@/components/from";
import "/app/style.css"

export default function Test() {

    return (
        <div>
            <div className="row">
                <div className="col-md-10">
                    <h2>Wie möchten Sie spenden?</h2>

                    <p>Entscheiden Sie sich für eine der folgenden Optionen:</p>
                    <ul>
                        <li>
                            <strong>1. Abholung durch das Sammelfahrzeug:</strong> Lassen Sie Ihre Spenden bequem von unserem Sammelfahrzeug abholen. Geben Sie einfach Ihre Adresse und die gewünschten Kleidungsstücke an. Wir kommen am nächsten Werktag bei Ihnen vorbei.
                        </li>
                        <li>
                            <strong>2. Persönliche Abgabe:</strong> Bringen Sie Ihre Spenden persönlich in unsere Geschäftsstelle.
                        </li>
                    </ul>

                    <p>Vielen Dank für Ihre Unterstützung!</p>
                </div>

                <h3>Formular zur Spendenregistrierung</h3>
                <Formular />

            </div >
        </div>
    );
}

