import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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

                <div className="mb-3">
                    <label className="form-label">Wohin soll ihre Spende?</label>
                    <select default="Bitte Wählen sie die Methode" className="form-select">
                        <option selected>Bitte wählen sie das Gebiet</option>
                        <option value="1">Türkei</option>
                        <option value="2">Israel</option>
                        <option value="2">Ukraine</option>
                    </select>
                </div>

                <div className="mb-3">
                <label className="form-label">Was möchten sie gern Spenden?</label>
                    <InputGroup>
                        <Form.Control as="textarea" aria-label="With textarea" />
                    </InputGroup>
                </div>


                <button className="btn btn-primary">Weiter</button>
            </div>
        </>
    );
};

