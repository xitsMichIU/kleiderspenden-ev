//Client Komponente um die CSS Datei zu lesen
'use client'

//Importiert die benötigte CSS Datei
import React from "react"

import { Container } from "react-bootstrap"

//Importiert die CSS Datei
import "/app/style.css"

export default function Privacy() {
    return (
        <Container fluid>
            <h2>Datenschutzhinweise gemäß Art. 13 DSGVO</h2>

            <h3>Verantwortliche Stelle</h3>
            <p>Schaffhauser Str. 60, 78224 Singen am Hohentwiel</p>

            <p>Bei Fragen zum Datenschutz stehen wir Ihnen unter <a href="mailto:info@kleiderspenden.org">info@kleiderspenden.org</a> oder unter der oben angegebenen postalischen Anschrift zur Verfügung.</p>

            <h3>Datenverarbeitung auf unserer Webseite und weiteren Online-Angeboten</h3>
            <p>Logfiles beim Aufruf unserer Webseite: Bei Aufruf unserer Webseite werden zur Analyse von Fehlern und Sicherheitsvorfällen Logfiles erstellt. Diese bleiben nur für einige Tage bis Wochen gespeichert und werden anschließend automatisch gelöscht.</p>

            <h3>Datenverarbeitung im Rahmen unserer Vereinsarbeit</h3>
            <h4>Mitgliederverwaltung</h4>
            <p>Mitgliedsdaten werden von den jeweiligen Funktionsträger:innen unseres Vereins nur für die ihnen zugeordnete Aufgabenerfüllung verarbeitet.</p>
            <ul>
                <li>Wenn der Vorstand Mitgliedsdaten benötigt, um seine Aufgaben zu erledigen, darf er auf alle hierfür erforderlichen Mitgliedsdaten zugreifen. Dazu gehört insbesondere die Abgabe von Kleiderspenden.</li>
                <li>Der/die Kassenwart:in verarbeitet die Mitgliedsdaten, die für den Einzug der Mitgliedsbeiträge, der/die Kassenprüfer:in verarbeitet die Mitgliedsdaten, die für die Kassenprüfung relevant sind. Dies sind Vorname, Nachname, postalische Anschrift und Bankverbindung mit Zahlungsdaten sowie ggf. Zugriff auf die Lastschriftsverfahrensgenehmigung inklusive Unterschrift, sofern das Mitglied dem Verein ein Lastschriftmandat erteilt hat.</li>
                <li>Die Vereinsgeschäftsstelle verarbeitet die Mitgliedsdaten zur Mitgliedsverwaltung und -betreuung.</li>
            </ul>
            <p>Zweck für die Verarbeitung der Mitgliedsdaten ist die Verfolgung des Vereinszwecks und die -verwaltung. Rechtsgrundlage ist die Vereinsmitgliedschaft (Artikel 6 Absatz 1 b) DSGVO).</p>
            <p>Die aktuellen Mitgliedsdaten werden für die Dauer der Mitgliedschaft und darüber hinaus für 1 Monat gespeichert.</p>

            <h3>Betroffenenrechte</h3>
            <p>Wenn wir personenbezogene Daten von Ihnen verarbeiten, haben Sie folgende Betroffenenrechte:</p>
            <ul>
                <li>ein Recht auf Auskunft über die verarbeiteten Daten und auf Kopie,</li>
                <li>ein Berichtigungsrecht, wenn wir falsche Daten über Sie verarbeiten,</li>
                <li>ein Recht auf Löschung, es sei denn, dass noch Ausnahmen greifen, warum wir die Daten noch speichern, also zum Beispiel Aufbewahrungspflichten oder Verjährungsfristen,</li>
                <li>ein Recht auf Einschränkung der Verarbeitung,</li>
                <li>ein jederzeitiges Recht, Einwilligungen in die Datenverarbeitung zu widerrufen,</li>
                <li>ein Widerspruchsrecht gegen eine Verarbeitung im öffentlichen oder bei berechtigtem Interesse,</li>
                <li>ein Recht auf Datenübertragbarkeit,</li>
                <li>ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde, wenn Sie finden, dass wir Ihre Daten nicht ordnungsgemäß verarbeiten. Für unseren Verein ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit in Baden-Württemberg zuständig. Wenn Sie sich in einem anderen Bundesland oder nicht in Deutschland aufhalten, können Sie sich aber auch an die dortige Datenschutzbehörde wenden.</li>
            </ul>

        </Container>
    );
}
