import React from 'react';
import "./icon.css";
import { Link } from 'react-router-dom';


const IconSidebar = (props) => (
    <Link to={props.to}>
        <div className="main-sidebar__icon"><img className="main-sidebar__icon-image" alt="" src={props.src} />
        </div>
    </Link>
);

export default IconSidebar;