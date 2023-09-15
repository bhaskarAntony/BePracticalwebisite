import React, { Component } from 'react';

const imgurl = "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
const imageData = [
  { id: 1, imageUrl: imgurl },
  { id: 2, imageUrl: imgurl },
  { id: 3, imageUrl: imgurl },
  { id: 4, imageUrl: imgurl },
  { id: 5, imageUrl: imgurl },
  { id: 6, imageUrl: imgurl },
  { id: 7, imageUrl: imgurl },
  { id: 8, imageUrl: imgurl },
  { id: 9, imageUrl: imgurl },
  { id: 10, imageUrl: imgurl },
  { id: 11, imageUrl: imgurl },
  { id: 12, imageUrl: imgurl },
  { id: 13, imageUrl: imgurl },
  { id: 14, imageUrl: imgurl },
  { id: 15, imageUrl: imgurl },
  { id: 16, imageUrl: imgurl },
  { id: 17, imageUrl: imgurl },
  { id: 18, imageUrl: imgurl },
  { id: 19, imageUrl: imgurl },
  { id: 20, imageUrl: imgurl },
  // Add more objects with image URLs
];

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    this.randomlyPositionImages();
  }

  randomlyPositionImages() {
    const images = imageData.map((imageObj) => {
      const x = Math.random() * 150; // Random x-coordinate within the container
      const y = Math.random() * 150; // Random y-coordinate within the container
      const size = Math.random() * 100 + 50; // Random size between 50px and 150px

      return (
        <img
          key={imageObj.id}
          src={imageObj.imageUrl}
          alt={`Image ${imageObj.id}`}
          className="random-image animated-item"
          style={{
            position: 'absolute',
            left: `${x}%`,
            top: `${y}%`,
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      );
    });

    this.setState({ images });
  }

  render() {
    return (
      <div className="students">
        {this.state.images}
      </div>
    );
  }
}

export default Students;
