import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

import leftArrow from '../../assets/img/left-arrow.png';
import rightArrow from '../../assets/img/right-arrow.png';

import Slide from '../Slide/slide';
// import LoadingBar from '../LoadingBar/loadingBar';

import './carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      className: 'carousel',
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1.9,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };
    const slides = this.props.items.map((item) => (
      <Slide key={item.id} name={item.name} imgSrc={item.imgSrc} />
    ));
    console.log(slides, 'slides');
    return (
      <Fragment>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {slides}
        </Slider>
        <div className="carousel__wrap ">
          <button className="carousel__button" onClick={this.previous}>
            <img className="carousel__arrow--right" alt="" src={leftArrow} />
          </button>
          <button className="carousel__button" onClick={this.next}>
            <img className="carousel__arrow--left" alt="" src={rightArrow} />
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Carousel;
