import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const createLink = (text, link) => <Link to={link}>{createSubtitle(text)}</Link>;

const createSubtitle = (text) => <p className="card__text-singer">{text}</p>;

const Card = ({ imgSrc, size, title, subtitle, link }) => (
  <div className={`card card--${size}`}>
    <img src={imgSrc} alt={title} className="card__cover" />
    <div className="card__info">
      <div className="card__text">
        <p className="card__text-title">{title}</p>
        {link ? createLink(subtitle, link) : createSubtitle(subtitle)}
      </div>
      <div className="card__options" />
    </div>
  </div>
);

export default Card;
