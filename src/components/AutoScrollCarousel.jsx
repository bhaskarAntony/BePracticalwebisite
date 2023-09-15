import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/placed.css'

const carouselStyle = {
  height: '100%', // Set the height to 80% of the viewport height
};

class AutoScrollCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  componentDidMount() {
    this.carouselInterval = setInterval(this.nextSlide, 2000); // Auto scroll every 3 seconds
  }

  componentWillUnmount() {
    clearInterval(this.carouselInterval); // Clear the interval when the component unmounts
  }

  nextSlide = () => {
    const { activeIndex } = this.state;
    const nextIndex = activeIndex === this.props.items.length - 1 ? 0 : activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Carousel
        activeIndex={activeIndex}
        onSelect={() => {}}
        style={carouselStyle} // Apply the carousel height style
      >
        {this.props.items.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={item.imageUrl}
              alt={item.caption}
              style={{ height: '100%', objectFit: 'cover' }} // Apply styles to the images
            />
            <Carousel.Caption>
             <div className="caption">
             <h3>{item.caption}</h3>
              <p>{item.description}</p>
             </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default AutoScrollCarousel;
