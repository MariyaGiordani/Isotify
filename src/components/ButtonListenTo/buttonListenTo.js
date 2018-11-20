import React from 'react';
import './buttonListenTo.css';

import triangleImg from '../../assets/img/triangle.png';

const ButtonListenTo = () => (
    <button className="button__listen">
        Listen To
        <div className="button__listen-circule"><img className="button__listen-triangle" alt="" src={triangleImg} /></div>
    </button>
);

export default ButtonListenTo;