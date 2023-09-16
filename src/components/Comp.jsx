import React from 'react';
import '../styles/students.css';

function Comp() {
  const companies1 = [
    {
      image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
      name: '',
    },
    {
        image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
        name: '',
      },
      {
        image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
        name: '',
      },
      {
        image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
        name: '',
      },
      {
        image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
        name: '',
      },
      {
        image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
        name: '',
      },
      {
        image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
        name: '',
      },
      {
        image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
        name: '',
      },
      {
        image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
        name: '',
      },
      {
        image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
        name: '',
      },
      {
        image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
        name: '',
      }
    // Add more company objects
  ];

  const companies2 = [
    {
        image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
        name: '',
      },
      {
          image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
          name: '',
        },
        {
          image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
          name: '',
        },
        {
          image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
          name: '',
        },
        {
          image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
          name: '',
        },
        {
          image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
          name: '',
        },
        {
          image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
          name: '',
        },
        {
          image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
          name: '',
        },
        {
          image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
          name: '',
        },
        {
          image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
          name: '',
        },
        {
          image: 'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
          name: '',
        }
  ];

  return (
    <section className="container-fluid cmain">
      <div className="inner rounded-0 text-center">
        <div className="text">
          <span className='fs-3 text-center'>Our Students Working at</span>
        </div>
        <div className="company-list1">
          <div className="scroll1">
            {companies1.map((company, index) => (
              <div key={index} className="company">
                <img src={company.image} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="company-list2">
          <div className="scroll2">
            {companies2.map((company, index) => (
              <div key={index} className="company">
                <img src={company.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comp;
