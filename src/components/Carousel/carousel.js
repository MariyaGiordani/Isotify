import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

// import leftArrow from '../../assets/img/left-arrow.png';
// import rightArrow from '../../assets/img/right-arrow.png';

import Slide from '../Slide/slide';
// import LoadingBar from '../LoadingBar/loadingBar';

import './carousel.css';

class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1.8,
      slidesToScroll: 1
    };
    const slides = this.props.items.map((item) => (
      <Slide key={item.id} name={item.name} imgSrc={item.imgSrc} />
    ));
    console.log(slides, 'slides');
    return <Slider {...settings}>{slides}</Slider>;
  }
}

export default Carousel;
