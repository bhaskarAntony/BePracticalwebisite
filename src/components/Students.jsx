import React from 'react';
import '../styles/students.css';
import student1 from '../images/01.jpg';

const studentsimages = [
  {
    profile: "https://ik.imagekit.io/soqb30qgl/images/i1.jpg?updatedAt=1694850922777",
  },
  {
    profile: "",
  },
  {
    profile: "student1",
  },
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
