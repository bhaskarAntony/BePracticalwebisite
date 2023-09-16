import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/home.css';

const carouselStyle = {
  height: '100%',
};

class Homedata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      isHovered: false,
    };
  }

  componentDidMount() {
    this.carouselInterval = setInterval(this.nextSlide, 3000); // Auto scroll every 3 seconds
  }

  componentWillUnmount() {
    clearInterval(this.carouselInterval);
  }

  nextSlide = () => {
    if (!this.state.isHovered) {
      const { activeIndex } = this.state;
      const nextIndex = activeIndex === this.props.items.length - 1 ? 0 : activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Carousel
        activeIndex={activeIndex}
        onSelect={() => {}}
        style={carouselStyle}
        indicators={false}
        pause="hover"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.props.items.map((item, index) => (
          <Carousel.Item
            key={index}
            className={index === activeIndex ? 'active' : ''}
          >
            <div className="carousel-content">
              <h2 className="boldtext">{item.boldtext}</h2>
              <p className="normaltext">{item.normaltext}</p>
              <div className="btn-container">
                <button className="btn">Download Brochure</button>
                <button className="btn">Book Our Free Demo Classes</button>
              </div>
              <div className="row mt-2">
                <div className="col-12 col-sm-12 col-md-7">
                  <input type="text" className="form-control get-in-touch p-3" placeholder="Your Name" />
                </div>
                <div className="col-12 col-sm-12 col-md-5">
                  <button className="btn join-home-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Join Now <i className='bu bi-send'></i></button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default Homedata;
