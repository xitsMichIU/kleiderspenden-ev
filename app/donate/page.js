//Client Komponente wegen "Use State"
"use client";

//Importiert die benötigten Methoden und Komponenten
import { useState } from "react";

import Formular from "@/components/from";
import "/app/style.css"
import Manual from "@/components/manual";

export default function Donate() {

    return (
        <div>
            <h1>Spenden Sie jetzt!</h1>
            <p>Sie benötigten eine Anleitung?</p>
            <div className="mb-3">
                <Manual />
            </div>
            <h3 >Spende hier Registrieren</h3>
            <Formular />
        </div >
    );
}

