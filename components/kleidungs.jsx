import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

//Importiert das CSS File das eigene Anpassungen enthält
import "/Users/michaelgeigges/GitHub/kleiderspenden-ev/app/style.css"

const Kleidungsauswahl = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const allItems = ['Oberteile', 'Unterteile', 'Schuhe', 'Accessories'];

    const handleCheckboxChange = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    return (
        <div>
            <Form.Group md="4">
                <Form.Label>Art der Kleidung</Form.Label>
                {allItems.map((item, index) => (
                    <Form.Check
                        key={index}
                        type="checkbox"
                        label={item}
                        required
                        checked={selectedItems.includes(item)}
                        onChange={() => handleCheckboxChange(item)}
                    />
                ))}
            </Form.Group>
        </div>
    );
};

export default Kleidungsauswahl;
