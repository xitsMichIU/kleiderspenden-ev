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
                            <label className="form-label">Art der Kleidung</label>
                            <input type="text" className="form-control" id="firstName" />
                        </div>
                        <div className="col">
                            <label className="form-label">Kriesengebiet</label>
                            <input type="text" className="form-control" id="firstName" />
                        </div>
                    </div>

                    <button style={{ margin: '0.5em' }} type="submit" className="btn btn-primary">Kleiderspende Abgeben</button>
                </div>
            </div>
        </form>
    );
};