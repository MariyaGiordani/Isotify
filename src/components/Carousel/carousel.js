import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';

import leftArrow from '../../assets/img/left-arrow.png';
import rightArrow from '../../assets/img/right-arrow.png';

import LoadingBar from '../LoadingBar/loadingBar';
import Slide from '../Slide/slide';

const MAX_PROGRESS = 100;
const PERCENTAGE_LOAD = 2;
const TIMEOUT = 500;
class Carousel extends Component {
  state = {
    progress: 0,
    items: []
  };

  componentDidMount() {
    this.initializingBar();
  }

  initializingBar = () => {
    const interval = setInterval(() => {
      if (this.state.progress >= MAX_PROGRESS) {
        return clearInterval(interval);
      } else {
        this.setState({
          progress: this.state.progress + PERCENTAGE_LOAD
        });
      }
    }, TIMEOUT);
  };

  getCarouselSetting = () => ({
    className: 'carousel',
    dots: false,
    infinite: true,
    slidesToShow: 1.9,
    slidesToScroll: 1,
    autoplaySpeed: 1200,
    autoplay: true,
    pauseOnHover: true,
    afterChange: () => {
      this.setState({ progress: 0 });
      this.initializingBar();
    },
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  next = () => {
    this.slider.slickNext();
  };

  previous = () => {
    this.slider.slickPrev();
  };

  render = () => {
    const { progress } = this.state;
    const { items } = this.props;

    const slides = items.map(({ id: key, name, imgSrc }) => (
      <Slide {...{ key, name, imgSrc }} />
    ));

    return (
      <Fragment>
        <div className="carousel__slider">
          <Slider ref={(c) => (this.slider = c)} {...this.getCarouselSetting()}>
            {slides}
          </Slider>
        </div>
        <LoadingBar progress={progress} />
        <div className="carousel__arrows">
          <button className="carousel__button" onClick={this.previous}>
            <img
              className="carousel__arrow--right"
              alt="Right arrow"
              src={leftArrow}
            />
          </button>
          <button className="carousel__button" onClick={this.next}>
            <img
              className="carousel__arrow--left"
              alt="Left arrow"
              src={rightArrow}
            />
          </button>
        </div>
      </Fragment>
    );
  };
}

export default Carousel;
