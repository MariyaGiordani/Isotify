import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const createLink = (link, element) => <Link to={link}>{element}</Link>;
const createTitle = (text) => <p className="card__text-title">{text}</p>;
const createSubtitle = (text) => <p className="card__text-singer">{text}</p>;

const Card = ({ imgSrc, size, title, subtitle }) => {
  const titleParagraph = createTitle(title.text);
  const subtitleParagraph = createSubtitle(subtitle.text);
  return (
    <div className={`card card--${size}`}>
      <img src={imgSrc} alt={title} className="card__cover" />
      <div className="card__info">
        <div className="card__text">
          {title.link ? createLink(title.link, titleParagraph) : titleParagraph}
          {subtitle.link ? createLink(subtitle.link, subtitleParagraph) : subtitleParagraph}
        </div>
        <div className="card__options" />
      </div>
    </div>
  );
};

export default Card;
