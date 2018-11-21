import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './card.css';
import 'react-tippy/dist/tippy.css';

import { Tooltip } from 'react-tippy';
import Popup from '../../components/Popup/component';
import { getAlbumTracks } from '../../services/tracks';
import { albumTracks } from '../../utils/spotifyResponseParsers';

const createLink = (link, element) => <Link to={link}>{element}</Link>;

const createPopup = (image, popupContent, title, subtitle, date) => {
  return (
    <Tooltip
      useContext={true}
      html={
        <Popup
          tracks={popupContent}
          title={title}
          subtitle={subtitle}
          date={date}
        />
      }
      trigger="click focus"
      theme="light"
      animation="fade"
      interactive
      position="right"
    >
      {image}
    </Tooltip>
  );
};

class Card extends Component {
  state = {
    popupContent: []
  };

  componentDidMount() {
    if (this.props.popup) {
      const albumId = this.props.albumId;
      getAlbumTracks(albumId).then((response) => {
        const popupContent = albumTracks(response);
        this.setState({ popupContent });
      });
    }
  }

  render = () => {
    const {
      imgSrc,
      size,
      title,
      subtitle,
      titleHref,
      subtitleHref,
      popup,
      date
    } = this.props;
    const cardImage = <img src={imgSrc} alt={title} className="card__cover" />;
    const titleParagraph = <p className="card__text-title">{title}</p>;
    const subtitleParagraph = <p className="card__text-subtitle">{subtitle}</p>;

    return (
      <div className={`card card--${size}`}>
        {popup !== undefined
          ? createPopup(
              cardImage,
              this.state.popupContent,
              title,
              subtitle,
              date
            )
          : cardImage}
        <div className="card__info">
          <div className="card__text">
            {titleHref ? createLink(titleHref, titleParagraph) : titleParagraph}
            {subtitleHref
              ? createLink(subtitleHref, subtitleParagraph)
              : subtitleParagraph}
          </div>
          <div className="card__options" />
        </div>
      </div>
    );
  };
}

export default Card;
