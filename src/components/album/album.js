import React from 'react';
import "./album.css";


const Album = (props) => (
    <div className="album">
        <img src={props.imgSrc} className={"album__cover album__cover--" + props.size}/>
        <div className={"album__info album__info--" + props.size}>
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