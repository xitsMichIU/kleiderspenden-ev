//Importieren der React Komponenten
import React, { useState, useEffect } from 'react';

//Importieren der Bootstrap Komponenten
import { Form } from 'react-bootstrap';

//Mit dem Prop wird die handleClothesSelection Funktion aus dem Formular übergeben um im Parent die Variable zu aktualisieren.
export default function Clothes({ onClothesSelection }) {

    //Array welches die ausgewählte Kleidung enthält, zu beginn leer.
    const [selectedItems, setSelectedItems] = useState([]);

    //Arten von Kleidung die aus der Liste ausgewählt werden kann
    const allItems = ['Oberteile', 'Unterteile', 'Schuhe', 'Accessories'];

    //Funktion welche die Auswahl eines Objektes aus der Liste verarbeitet. 
    const handleCheckboxChange = (item) => {

        // Je nach aktueller Auswahl wird entweder ein Objekt in die Liste hinzugefügt oder entfernt.
        // Die Variable "prevSelectedItems" enthält die Liste vor der Auswahländerung und wird benötigt,
        // um zu entscheiden, ob das Objekt hinzugefügt oder entfernt werden muss.
        // Ist es in der vorherigen Auswahl enthalten und somit bereits ausgewählt gewesen,
        // wird es entfernt, da es nun abgewählt worden sein muss.
        // Ist es in der vorherigen Auswahl nicht enthalten, wird es in die Liste eingefügt.
        setSelectedItems((prevSelectedItems) => {

            //Leers Array um die neue Kleidungsauswahl darin zu speichern.
            let updatedItems = [];

            //Wenn die Kleidungsstück bereits ausgewählt war, entferne es aus der Liste.
            if (prevSelectedItems.includes(item)) {

                //Schleife welche die Liste der Kleidungsstücke vor der Änderung der Auswahl durchläuft
                for (const prevItem of prevSelectedItems) {

                    //Füge jedes Kleidungsstück in die neue Liste hinzu, außer das Kleidungsstück welches entfernt werden soll.
                    if (prevItem !== item) {

                        //Fügt das jeweilige Element in die neue Liste hinzu.
                        updatedItems.push(prevItem);
                    }
                }

                //Rückgabe der neuen Liste.
                return updatedItems;

            } else {

                //Leers Array um die neue Kleidungsauswahl darin zu speichern.
                let updatedItems = [];

                //Legt eine Kopie des prevSelectedItem Arrays in updatedItems an
                for (const prevItem of prevSelectedItems) {
                    updatedItems.push(prevItem);
                }

                //Fügt das neu ausgewählte Element in die Liste hinzu 
                updatedItems.push(item);

                //Rückgabe der neuen Liste.
                return updatedItems;
            }
        });
    };

    //useEffect wird immer Aufgerufen, wenn die "selectedItems" Variable geändert wird.
    //Eine Änderung erfolgt immer dann, wenn die gewählte Kleidung geändert wird.

    useEffect(() => {

        //Es wird die "handleClothesSelection" durch den Prop onClothesSelection aufgerufen.
        //Die Liste mit den Ausgewählten Objekten wird hierdurch an das Formular als übergabeparameter übergeben.
        //Innerhalb der handleClothesSelection wird nun die Variable "selectedClothes" aktualisiert  
        //Hierdurch wird gewährleistet, dass die Auswahl im Browser aktualisiert wird
        onClothesSelection(selectedItems);

    }, [selectedItems, onClothesSelection]);

    return (
        <div>
            <Form.Group md="4">
                <Form.Label>Art der Kleidung</Form.Label>
                {allItems.map((item, index) => (
                    <Form.Check
                        key={index}
                        type="checkbox"
                        label={item}
                        checked={selectedItems.includes(item)}
                        onChange={() => handleCheckboxChange(item)}
                    />
                ))}
            </Form.Group>
        </div>
    );
};
