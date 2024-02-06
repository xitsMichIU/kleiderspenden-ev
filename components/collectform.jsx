import React from "react";

export default function Deliveryform() {

    return (
        <form>
            <div style={{ padding: '0.5em' }}>
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