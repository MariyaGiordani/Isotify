import React from "react";
import "./album.css";

const Album = (props) => (
  <div className="album">
    <img src={props.imgSrc} className={"album__cover album__cover--" + props.size} />
    <div className={"album__info"}>
      <div className="text">
        <div className={"text__title"}>{props.title}</div>
        <div className={"text__singer"}>{props.author}</div>
      </div>
      <div className="options" />
    </div>
  </div>
);

export default Album;
