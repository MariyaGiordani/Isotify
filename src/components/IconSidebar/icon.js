import React from 'react';
import "./icon.css";
import { Link } from 'react-router-dom';
import SelectedIcon from "../SelectedIcon/selectedicon";


const IconSidebar = (props) => (
    <Link
        to={props.to}
        onClick={() => props.onLinkClicked(props.to)}>

        <div className="main-sidebar__icon">
            <img className="main-sidebar__icon-image" alt="" src={props.src} />
            {props.isSelected && <SelectedIcon />}
        </div>
        <div className="main-sidebar__icon-title">{props.name}</div>
    </Link>
);

export default IconSidebar;