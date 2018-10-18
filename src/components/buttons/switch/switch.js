import React from 'react';
import "./switch.css";

const Switch = (props) => (
    <div className="container">
    <p className="container__option">{props.firstOption}</p>
    <label className="switch">
        <input type="checkbox" className="switch__input"/>
        <span className="switch__handle"></span>
    </label>
    <p className="container__option">{props.secondOption}</p>
    </div>
);

export default Switch;



