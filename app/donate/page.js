//Imports 
"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Collectform from "@/components/collectform";
import Deliveryform from "@/components/deliveryform";


export default function donationType() {

    const [selectedRadio, setSelectedRadio] = useState('btnradio1');

    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.id);
    };

    return (
        <div>
            <h1>Registieren zur Kleiderspende</h1>
            <p>Bitte nutzen sie folgendes Formular um sich für die Abgabe einer Kleiderspende zu registieren.</p>

            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input onChange={handleRadioChange} type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                <label className="btn btn-outline-primary" htmlFor="btnradio1">Abholung mit Sammelfahrzeug</label>

                <input onChange={handleRadioChange} type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio2">Übergabe an der Geschäftsstelle</label>
            </div>

            <div>
                {selectedRadio === 'btnradio1' && <Collectform />}
                {selectedRadio === 'btnradio2' && <Deliveryform />}
            </div>

        </div>

    )

}

