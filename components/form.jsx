import React from "react";

function DeliveryMethod() {
    return (
        <div style={{ padding: '0.2‚em' }}>
            <p>Wie möchtest du deine Keleidung Spenden?</p>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                <label className="btn btn-outline-primary" htmlFor="btnradio1">Anholung</label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio2">Abgabe vor Ort</label>
            </div>
        </div>
    )
}

export default function Form() {

    return (
        <form>

            <div style={{ padding: '0.5em' }}>
                <h1>Registieren zur Kleiderspende</h1>
                <p>Bitte nutzen sie folgendes Formular um sich für die Abgabe einer Kleiderspende zu registieren.</p>

                <div className="border border-primary rounded border-1" style={{ padding: '0.5em' }}>
                    <div className="row">
                        <div className="col">
                            <label className="form-label">Vorname</label>
                            <input type="text" className="form-control" placeholder="" aria-label="First name" />
                        </div>
                        <div className="col">
                            <label className="form-label">Nachname</label>
                            <input type="text" className="form-control" placeholder="" aria-label="Last name" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label className="form-label">Straße und Hausnummer</label>
                            <input type="text" className="form-control" id="firstName" />
                        </div>
                        <div className="col">
                            <label className="form-label">Postleitzahl</label>
                            <input type="text" className="form-control" id="firstName" />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Ort</label>
                        <input type="text" className="form-control" id="firstName" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email Adresse</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <button type="submit" className="btn btn-primary">Verbindlich registieren</button>
                </div>
            </div>
        </form>
    );
};