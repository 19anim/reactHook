import React, { useState } from 'react';
import './style.css';

function getRandomColor() {
    let COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    let randomIndex = Math.trunc(Math.random() * COLOR_LIST.length);
    return COLOR_LIST[randomIndex];
}

function ColorBox(props) {

    const [color, setColor] = useState(() => {
        return localStorage.getItem('box-color') || 'deeppink';
    });

    function handleBoxClick() {
        let newColor = getRandomColor();
        while (newColor === color)
            newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box-color', newColor);
    }

    return (
        <div className='color-box' style={{ backgroundColor: color }} onClick={handleBoxClick}>
        </div>
    );
}

export default ColorBox;