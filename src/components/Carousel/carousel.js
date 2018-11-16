import React, { Component, Fragment } from 'react';

import leftArrow from '../../assets/img/left-arrow.png';
import rightArrow from '../../assets/img/right-arrow.png';

import Slide from '../Slide/slide';

import './carousel.css';
import data from './constants';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    };
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  // renderSlides() {
  //   return data.map((props) => {
  //     return (
  //       <Slide name={props.name} key={props.index} picture={props.picture} />
  //     );
  //   });
  // }

  render() {
    const { property } = this.state;
    return (
      <Fragment>
        <div className="carousel">
          <div className="carousel__viewport">
            <Slide property={property} />
          </div>
        </div>
        <div className="carousel__wrap">
          <button
            className="carousel__button"
            onClick={() => this.prevProperty()}
            disabled={property.index === 0}
          >
            <img
              className="carousel__arrow--left"
              alt="Left arrow"
              src={leftArrow}
            />
          </button>
          <button
            className="carousel__button"
            onClick={() => this.nextProperty()}
            disabled={property.index === data.properties.length - 1}
          >
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
