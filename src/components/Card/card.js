import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';

const createLink = (link, element) => <Link to={link}>{element}</Link>;

const createPopup = (option, popup, title) => {
  return (
    <Tooltip
      useContext={true}
      html={popup}
      position="right"
      trigger="click focus"
      theme="light"
      animation="fade"
      interactive
      title={title}
    >
      {option}
    </Tooltip>
  );
};

const Card = ({
  imgSrc,
  size,
  title,
  subtitle,
  titleHref,
  subtitleHref,
  popup
}) => {
  const cardImage = <img src={imgSrc} alt={title} className="card__cover" />;
  const optionDots = (
    <div className="card__options-click">
      <div className="card__options" />
    </div>
  );
  const titleParagraph = <p className="card__text-title">{title}</p>;
  const subtitleParagraph = <p className="card__text-subtitle">{subtitle}</p>;
  return (
    <div className={`card card--${size}`}>
      {cardImage}
      <div className="card__info">
        <div className="card__text">
          {titleHref ? createLink(titleHref, titleParagraph) : titleParagraph}
          {subtitleHref
            ? createLink(subtitleHref, subtitleParagraph)
            : subtitleParagraph}
        </div>
        {popup ? createPopup(optionDots, popup) : optionDots}
      </div>
    </div>
  );
};

export default Card;
