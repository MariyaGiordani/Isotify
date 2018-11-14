import React, { Carousel } from 'react';

import './carousel.css';


export default class Carousel extends Component {
   Carousel = React.createClass({
  getInitialState: function() {
    return {
      currentSlide: 0,
      slides: this.props.children.length,
      title: this.props.children[0].props.title,
      description: this.props.children[0].props.children
    };
  },
  selectSlide: function(id) {
    var slide = this.props.children[id].props;
    this.setState({
      currentSlide: id,
      title: slide.title,
      description: slide.children
    });
  },
  timer: function() {
    var nextSlide =
      this.state.currentSlide < this.state.slides - 1
        ? ++this.state.currentSlide
        : 0;
    this.selectSlide(nextSlide);
  },
  componentDidMount: function() {
    // Sets the display to update to the next slide ever x milliseconds
    var interval = setInterval(this.timer, 2000);
    this.setState({ interval: interval });
  },
  render: function() {
    var count = -1;
    var children = this.props.children.map((item) => {
      return React.cloneElement(item, {
        selected: this.state.currentSlide == ++count ? true : false,
        slideId: count
      });
    });

    return (
      <div className="Carousel">
        <div className="Carousel-Items">{children}</div>
        <div className="Carousel-Selectors">
          {children.map((item) => {
            return (
              <Carousel.Selector
                slideId={item.props.slideId}
                select={this.selectSlide}
                selected={item.props.selected}
              />
            );
          })}
        </div>
        <div className="Carousel-TitleDesc">
          <h2>{this.state.title}</h2>
          <p>{this.state.description}</p>
        </div>
      </div>
    );
  }
});

Carousel.Slide = React.createClass({
  render: function() {
    return (
      <div
        className={
          'Carousel-Slide ' +
          (this.props.selected ? 'Carousel-Slide-Selected' : '')
        }
      >
        <img src={this.props.img} />
      </div>
    );
  }
});

Carousel.Selector = React.createClass({
  select: function() {
    this.props.select(this.props.slideId);
  },
  render: function() {
    return (
      <div
        className={
          'Carousel-selector ' +
          (this.props.selected ? 'Carousel-Selector-Selected' : '')
        }
        onClick={this.select}
      />
    );
  }
});

  <Carousel>
    <Carousel.Slide
      img="https://c2.staticflickr.com/4/3562/3388550873_44bba5f99d_b.jpg"
      title="Baby Bird Loses the Worm"
    >
      Ullam officia, nobis nostrum, facere doloribus asperiores atque sit!
    </Carousel.Slide>
    <Carousel.Slide
      img="https://c1.staticflickr.com/1/10/15288615_8a5421cd9f_b.jpg"
      title="PotassiUP!"
    >
      Illum, possimus facere laborum saepe aut blanditiis fugiat velit nesciunt
      perferendis, consequuntur molestiae.
    </Carousel.Slide>
    <Carousel.Slide
      img="https://farm4.staticflickr.com/3914/15118079089_489aa62638_b.jpg"
      title="Bridge Double-crossed?"
    >
      Eos commodi, ad dignissimos unde beatae accusamus error, nostrum porro
      velit recusandae distinctio vel. Vel expedita quae molestias beatae ab
      tenetur laborum!
    </Carousel.Slide>
  </Carousel>
}
