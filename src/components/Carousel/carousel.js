import React, { Component, Fragment } from 'react';

import leftArrow from '../../assets/img/left-arrow.png';
import rightArrow from '../../assets/img/right-arrow.png';

import Slide from '../Slide/slide';

import './carousel.css';
import { LINKS } from './constants';

class Carousel extends Component {
  renderSlides() {
    return LINKS.map((props) => {
      return <Slide name={props.name} key={props.id} />;
    });
  }

  render() {
    return (
      <Fragment>
        <div className="carousel">
          <div
            className="carousel__viewport"
            ref="carouselViewport"
            onScroll={this.throttleScroll}
          >
            {this.renderSlides()}
          </div>
        </div>
        <div className="carousel__wrap">
          <button className="carousel__button" onClick={this.handleLeftClick}>
            <img
              className="carousel__arrow--left"
              alt="Left arrow"
              src={leftArrow}
            />
          </button>
          <button className="carousel__button" onClick={this.handleRightClick}>
            <img
              className="carousel__arrow--right"
              alt="Right arrow"
              src={rightArrow}
            />
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Carousel;
