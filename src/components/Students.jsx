import React from 'react';
import '../styles/students.css';

const studentsimages = [
  {
    profile: "https://ik.imagekit.io/soqb30qgl/images/i1.jpg?updatedAt=1694850922777",
  },
  {
    profile: "https://ik.imagekit.io/soqb30qgl/images/student2.jpg?updatedAt=1694850929158",
  },
  {
    profile: "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
  },
  {
    profile: "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
  }
];

function Students() {
  return (
    <div className="all-students-container">
      <div className="students-flex">
        {studentsimages.map((image, index) => (
          <div className="student">
          <img src={image.profile} key={index} alt={`Student ${index + 1}`} />

          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;
