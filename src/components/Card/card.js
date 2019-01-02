import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import { createPopUp } from '../../utils/popUp';
import grayDots from '../../assets/img/gray-dots.png';
import play from '../../assets/img/play.svg';

const createLink = (link, element) => <Link to={link}>{element}</Link>;

const hover = (id, playerCallBack) => (
  <div className="card__container card__container--overlay">
    <div
      className="card__cover card__cover--overlay"
      onClick={() => playerCallBack(id)}
    >
      <div className="card__play-button">
        <img src={play} alt="play album" className="card__play-button-image" />
      </div>
    </div>
  </div>
);

const Card = ({
  imgSrc,
  size,
  title,
  subtitle,
  titleHref,
  subtitleHref,
  popup,
  hasHover,
  id,
  hoverCallback
}) => {
  const cardImage = !!imgSrc ? (
    <div className="card__container">
      <img src={imgSrc} alt={title} className="card__cover" />
    </div>
  ) : (
    <div className="card__container">
      <div className="card__cover card__cover--no-picture" />
    </div>
  );
  const optionDots = (
    <img className="card__options" src={grayDots} alt="Teste" />
  );
  const titleParagraph = <p className="card__theme-text-title">{title}</p>;
  const subtitleParagraph = (
    <p className="card__theme-text-subtitle">{subtitle}</p>
  );
  return (
    <div className={`card card--${size}`}>
      {cardImage}
      {hasHover && hover(id, hoverCallback)}
      <div className="card__info">
        <div className="card__text">
          {titleHref ? createLink(titleHref, titleParagraph) : titleParagraph}
          <div className="card__subtitle">
            {subtitleHref
              ? createLink(subtitleHref, subtitleParagraph)
              : subtitleParagraph}
            {popup && createPopUp(optionDots, popup, 'right')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
