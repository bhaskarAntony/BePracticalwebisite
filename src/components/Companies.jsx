import React from 'react';
import '../styles/companies.css'
import '../styles/snapscoll.css'

function Companies() {
  const companies1 = [
    {
      image:
        'https://api.bepracticals.com/uploads/DIATOZ_6871149d25.png',
      name: '',
    },
    {
      image:
        'https://api.bepracticals.com/uploads/Edexcel_54f156bc77.png',
      name: '',
    },
    {
      image:
        'https://api.bepracticals.com/uploads/Entoss_Logo_f28fddfd9b.png',
      name: '',
    },
    {
      image:
        'https://api.bepracticals.com/uploads/fortune_Soft_5c82c4ee6c.png',
      name: '',
    },
    {
      image:
        'https://api.bepracticals.com/uploads/innominds_72023798c8.png',
      name: '',
    },
    {
      image:
        'https://api.bepracticals.com/uploads/ladybird_logo_69ec58c927.png',
      name: '',
    },
    {
      image:
        'https://api.bepracticals.com/uploads/AMBC_Logo_f3ea713363.png',
      name: '',
    },
    {
        image:
          'https://api.bepracticals.com/uploads/fortune_Soft_5c82c4ee6c.png',
        name: '',
      }
  ];

  const companies2 = [
    {
        image:
          'https://api.bepracticals.com/uploads/Bluetree_4789299e7a.png',
        name: '',
      },
      {
        image:
          'https://api.bepracticals.com/uploads/Code_Ops_83e047f871.png',
        name: '',
      },
      {
        image:
          'https://api.bepracticals.com/uploads/Infomaze_Logo_cae33d8cfa.png',
        name: '',
      },
      {
        image:
          'https://api.bepracticals.com/uploads/Joulswatt_ed46083717.png',
        name: '',
      },
      {
        image:
          'https://api.bepracticals.com/uploads/BLU_Technosoft_2fde5e500e.png',
        name: '',
      },
      {
        image:
          'https://api.bepracticals.com/uploads/Carvewing_04929051ab.png',
        name: '',
      },
      {
        image:
          'https://api.bepracticals.com/uploads/Bluetree_4789299e7a.png',
        name: '',
      },
      {
        image:
          'https://api.bepracticals.com/uploads/Data_Template_3d028f5b7e.jpg',
        name: '',
      }
  ]

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

export default Companies;
