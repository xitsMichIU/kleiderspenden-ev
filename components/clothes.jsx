//Importieren der React komponenten
import React, { useState, useEffect } from 'react';

//Importieren der Bootstrap Komponenten
import { Form } from 'react-bootstrap';

export default function Clothes({ onClothesSelection }) {
    const [selectedItems, setSelectedItems] = useState([]);
    const allItems = ['Oberteile', 'Unterteile', 'Schuhe', 'Accessories'];

    const handleCheckboxChange = (item) => {
        setSelectedItems((prevSelectedItems) => {
            const updatedItems = prevSelectedItems.includes(item)
                ? prevSelectedItems.filter((selectedItem) => selectedItem !== item)
                : [...prevSelectedItems, item];
            return updatedItems;
        });
    };

    useEffect(() => {
        // Hier wird die Funktion onClothesSelection mit dem aktualisierten Zustand aufgerufen und ans Formular übergeben
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
