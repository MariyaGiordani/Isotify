import React from "react";
import "./headerLine.css";

const HeaderLine = ({ title, subtitle, children }) => (
  <div className="header-line">
    <div className="header-line__texts">
      <h1 className="header-line__title">{title}</h1>
      <h2 className="header-line__subtitle">{subtitle}</h2>
    </div>
    {children}
  </div>
);

export default HeaderLine;
