import { useState } from 'react';
import React from 'react';
import ComponentC from './ComponentC';

function ComponentB() {
    const [name, setName] = useState('This is true');

    return (
        <div>
            <h3>Component B</h3>
            <p>Name is : {name}</p>
            <ComponentC name={name} />
        </div>

    )
};

export default ComponentB;