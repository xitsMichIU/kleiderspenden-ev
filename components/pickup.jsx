import React from "react";

export default function PickUp() {

    return (
        <>
            <div style={{ padding: '0.5em' }}>

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
                        <label className="form-label">Straße</label>
                        <input type="text" className="form-control" id="firstName" />
                    </div>
                    <div className="col">
                        <label className="form-label">Hausnummer</label>
                        <input type="text" className="form-control" id="firstName" />
                    </div>
                </div>

                <div className="row">

                    <div className="col">
                        <label className="form-label">Ort</label>
                        <input type="text" className="form-control" id="firstName" />
                    </div>
                    <div className="col">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email Adresse</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Wohin soll ihre Spende?</label>
                    <select default="Bitte Wählen sie die Methode" className="form-select">
                        <option selected>Bitte wählen sie das Gebiet</option>
                        <option value="1">Türkei</option>
                        <option value="2">Israel</option>
                        <option value="2">Ukraine</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Weiter</button>
            </div>
        </>
    );
};

