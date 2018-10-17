import React from 'react';
import "./album.css";


const Album = (props) => (
    
    <div className="card">
        <img 
            src="https://exquisiteemmalisa.files.wordpress.com/2015/10/classic-lady.jpg" 
            className={"card__cover card__cover--" + props.size}/>
        <div className="card__info">
          <div className="text">
            <div className={"text__title text__title--" + props.size}>{props.title}</div>
            <div className={"text__singer text__singer--" + props.size}>{props.author}</div>
          </div>
          <div className="options">
          </div>
        </div>
    </div>
);

export default Album;