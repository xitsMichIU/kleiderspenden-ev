import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navigation</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Spenden</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Über uns</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}