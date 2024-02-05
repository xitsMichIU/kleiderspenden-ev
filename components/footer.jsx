import React from "react";

export default function Footer() {
    return (
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" href="/legal">Impressum</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/privacy">Datenschutzerklärung</a>
                </li>
            </ul>
        </>
    );
}