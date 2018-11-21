import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';

import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

import leftArrow from '../../assets/img/left-arrow.png';
import rightArrow from '../../assets/img/right-arrow.png';

import LoadingBar from '../LoadingBar/loadingBar';
import Slide from '../Slide/slide';

import './carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    this.initializingBar();
  }

  initializingBar() {
    const interval = setInterval(() => {
      if (this.state.progress >= 100) {
        return clearInterval(interval);
      } else {
        this.setState({
          progress: this.state.progress + 2
        });
      }
    }, 500);
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
      slidesToShow: 1.9,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      autoplay: true,
      pauseOnHover: true,
      afterChange: () => {
        this.initializingBar();
        this.setState({ progress: 0 });
      },
      responsive: [
        {
          breakpoint: 786,
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
    return (
      <Fragment>
        <div className="carousel__slider">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {slides}
          </Slider>
        </div>
        <LoadingBar progress={this.state.progress} />
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
  }
}

export default Carousel;
