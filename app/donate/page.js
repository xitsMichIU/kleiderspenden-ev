//Client Komponente wegen "Use State"
"use client";

//Importiert die benötigten Methoden und Komponenten
import { useState } from "react";

import Formular from "@/components/from";
import "/app/style.css"

export default function Test() {
    return (
        <div>
            <Formular />
        </div >
    );
}

