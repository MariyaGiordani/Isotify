import React from 'react';

const Link = (props) => (
    <a href={props.link} className={props.classNameLink}>{props.linkText}</a>
);

export default Link;