'use client'

import React, { useState } from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';

export default function Kleidungsstück({ typ }) {
    const [count, setCount] = useState(0);

    const handleAddClick = () => {
        setCount(count + 1);
    };

    const handleRemoveClick = () => {
        if (count >= 1) {
            setCount(count - 1);
        }
    };
  
    return (
        <>
            <InputGroup className="mb-3">
            <Form.Control readOnly value={`${typ} ${count}`} />
                <Button onClick={handleAddClick} variant="success">Hinzufügen</Button>
                <Button onClick={handleRemoveClick} variant="danger">Entfernen</Button>
            </InputGroup>
        </>
    );
}
