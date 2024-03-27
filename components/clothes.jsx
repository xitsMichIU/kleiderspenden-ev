import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';

const Clothes = ({ onClothesSelection }) => {
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

export default Clothes;
