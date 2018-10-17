import React from 'react';
import "./headerLine.css";


const HeaderLine = (props) => (
    <div className="header-line">
        <div>
            <h1 className="header-line__title">{props.title}</h1>
            <h2 className="header-line__subtitle">{props.subtitle}</h2>
        </div>
        {props.children}
    </div>
);

export default HeaderLine;