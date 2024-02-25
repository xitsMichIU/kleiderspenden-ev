import React from "react";
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
    return (
        <>
            <Navbar sticky="bottom">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" href="/legal">Impressum</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/privacy">Datenschutzerklärung</a>
                </li>
            </ul>
        </Navbar >
        </>
    );
}