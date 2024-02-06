import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>

            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="/img/logo.svg" alt="Bootstrap" width="34" height="34" /> Kleiderspenden E.V</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/donate">Spenden</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">Über uns</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}