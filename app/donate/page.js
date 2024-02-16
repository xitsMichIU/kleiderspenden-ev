//Imports 
"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Collectform from "@/components/pickup";
import Deliveryform from "@/components/dropoff";


export default function DonationType() {

    //Parameter 1 ist die Variable, Parameter zwei die Funktion, der Wert in useState ist der Default Value
    const [selectedRadio, setSelectedRadio] = useState('btnradio1');

    //Variable dei eine Pfeilfunktion speichert
    const handleRadioChange = (event) => {
        //Der State wird auf den Ausgewählten Radio Button gesetzt. 
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
                {(() => {
                    //Funktion wählt das zu rendernde Element basierend auf dem Use State aus
                    if (selectedRadio === 'btnradio1') {
                        return <Collectform />;
                    } else if (selectedRadio === 'btnradio2') {
                        return <Deliveryform />;
                    } else {
                        return null;
                    }
                })()}
            </div>


        </div>

    )

}

