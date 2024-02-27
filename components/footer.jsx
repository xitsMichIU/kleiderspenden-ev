//Importiert das CSS File das eigene Anpassungen enthält
import "/app/style.css"

//Erstellt die Komponente des Footers
function Footer() {
    return (
        <>
            {/*Enthält die Navigationselemente*/}
            <ul id="footer" className="nav justify-content-center sticky-bottom">
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

export default Footer;