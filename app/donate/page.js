//Imports 
"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PickUp from "@/components/pickup";
import DropOff from "@/components/dropoff";


export default function DonationType() {

    //Parameter 1 ist die Variable, Parameter zwei die Funktion, der Wert in useState ist der Default Value
    const [option, setOption] = useState(0);

    //Variable die eine Pfeilfunktion speichert
    const optionChange = (event) => {
        //Der State wird auf die Ausgewählte Option gesetzt. 
        setOption(event.target.value);
    };

    return (
        <div>
            <div>{beschreibung()}</div>        
            <div className="border border-primary rounded border-1" style={{ padding: '0.5em' }}>
            <label className="form-label">Wie möchten Sie Spenden?</label>
                <select default="Bitte Wählen sie die Methode" value={option} onChange={optionChange} className="form-select">
                    <option value="0">Methode Wählen</option>
                    <option value="1">Abholung</option>
                    <option value="2">Abgabe</option>
                </select>

                <div>
                    {(() => {
                        //Funktion wählt das zu rendernde Element basierend auf dem Use State aus
                        if (option === "1") {
                            return <PickUp />;
                        } else if (option === "2") {
                            return <DropOff />;
                        } else {
                            return null;
                        }
                    })()}
                </div>

            </div>
        </div>

    )

}

function Demo() {
    const [count, setCount] = useState(0);
    return <>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>Remove</button>
    </>
}

function beschreibung() {
    return (
        <>
            <h1>Kleiderspende Registrierung</h1>

            <p>Bitte nutzen Sie das folgende Formular, um sich für die Abgabe einer Kleiderspende zu registrieren. Der Prozess ist in drei Schritte unterteilt:</p>

            <ol>
                <li>
                    <p>Schritt 1: Methode Wählen</p>
                    <p>Bitte geben sie an ob sie die Kleidung von unserem Sammelfahrzeug abholen lassen wollen oder ob sie sie in der Filiale abgeben möchten.</p>
                </li>

                <li>
                    <p>Daten Eingeben</p>
                    <p>Geben sie im Falle einer Abholung ihre Adressinformationen ein. Bitte nennen sie uns die Art und Menge der Kleidung die Sie spenden möchten.</p>

                </li>

                <li>
                    <p>Zusammenfassung</p>
                    <p>Ihre Angaben werden ihnen noch mals angezeigt</p>
                </li>
            </ol>

        </>
    )
}