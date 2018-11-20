import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

import leftArrow from '../../assets/img/left-arrow.png';
import rightArrow from '../../assets/img/right-arrow.png';

import Slide from '../Slide/slide';

import './carousel.css';
import LoadingBar from '../LoadingBar/loadingBar';

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
    this.initBar();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.progress !== prevState.progress) {
  //     console.log('Aquooo');
  //     const interval = setInterval(() => {
  //       if (this.state.progress >= 100) return clearInterval(interval);

  //       this.setState({
  //         progress: this.state.progress + 10
  //       });
  //     }, 400);
  //   }
  // }
  initBar() {
    const interval = setInterval(() => {
      if (this.state.progress >= 100) return clearInterval(interval);

      this.setState({
        progress: this.state.progress + 10
      });
    }, 400);
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
      autoplaySpeed: 4000,
      pauseOnHover: true,
      afterChange: () => {
        this.initBar();
        this.setState({ progress: 0 });
      },
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
        <div className="carousel__slider">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {slides}
          </Slider>
        </div>
        <LoadingBar progress={this.state.progress} />
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
