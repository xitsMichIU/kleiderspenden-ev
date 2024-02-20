//Imports 
"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PickUp from "@/components/pickup";
import DropOff from "@/components/dropoff";


export default function DonationType() {

    //Parameter 1 ist die Variable, Parameter zwei die Funktion, der Wert in useState ist der Default Value
    const [option, setOption] = useState(0);

    //Variable dei eine Pfeilfunktion speichert
    const optionChange = (event) => {
        //Der State wird auf die Ausgewählte Option gesetzt. 
        setOption(event.target.value);
    };

    return (
        <div>
            <h1>Kleiderspende Registrierung</h1>

            <p>Bitte nutzen Sie das folgende Formular, um sich für die Abgabe einer Kleiderspende zu registrieren. Der Prozess ist in drei Schritte unterteilt:</p>

            <ol>
                <li>
                    <p>Schritt: Methode und Krisengebiet wählen</p>
                </li>

                <li>
                    <p>Schritt: Kleidung auswählen</p>
                </li>

                <li>
                    <p>Schritt: Zusammenfassung</p>
                </li>
            </ol>

            <div className="border border-primary rounded border-1" style={{ padding: '0.5em' }}>
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
                    <h2>Schritt 1: Stammdaten eingeben</h2>
                    <p>Bitte geben Sie zuerst Ihre Stammdaten ein, um den Registrierungsprozess zu starten.</p>
                </li>

                <li>
                    <h2>Schritt 2: Kleidung auswählen</h2>
                    <p>Nachdem Sie Ihre Stammdaten eingegeben haben, können Sie nun die Kleidungsstücke auswählen, die Sie spenden möchten.</p>

                </li>

                <li>
                    <h2>Schritt 3: Zusammenfassung</h2>
                    <p>Nach erfolgreicher Auswahl können Sie Ihre Spende entweder von uns abholen lassen oder sie bequem in unserer Geschäftsstelle vorbeibringen.</p>
                </li>
            </ol>

        </>
    )
}