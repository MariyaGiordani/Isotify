import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const createLink = (link, element) => <Link to={link}>{element}</Link>;

const Card = ({ imgSrc, size, title, subtitle, titleHref, subtitleHref }) => {
  const titleParagraph = <p className="card__text-title">{title}</p>;
  const subtitleParagraph = <p className="card__text-singer">{subtitle}</p>;

  return (
    <div className={`card card--${size}`}>
      <img src={imgSrc} alt={title} className="card__cover" />
      <div className="card__info">
        <div className="card__text">
          {titleHref.link ? createLink(title.link, titleParagraph) : titleParagraph}
          {subtitleHref.link ? createLink(subtitle.link, subtitleParagraph) : subtitleParagraph}
        </div>
        <div className="card__options" />
      </div>
    </div>
  );
};

export default Card;
