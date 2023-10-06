import React from 'react';
import Single from '../../assets/single.png'
import Double from '../../assets/double.png'
import Triple from '../../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-20 px-4 bg-white'>
    <div>
        <h2 className='text-2xl font-bold text-center mb-20'>Support</h2>
    </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Single Person</h2>
              <p className='text-center text-4xl font-bold'>$150</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Basic Necessities</p>
                  <p className='py-2 border-b mx-8'>Medical Supplies</p>
                  <p className='py-2 border-b mx-8'>Training Program</p>
              </div>
              <button className='bg-primary-light w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Donate</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Orphan</h2>
              <p className='text-center text-4xl font-bold'>$200</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Basic Necessities</p>
                  <p className='py-2 border-b mx-8'>Educational Resources</p>
                  <p className='py-2 border-b mx-8'>Medical Supplies</p>
              </div>
              <button className='bg-transparent text-primary-light hover:text-white hover:bg-primary-light w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Donate</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Family</h2>
              <p className='text-center text-4xl font-bold'>$500</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Basic Necessities</p>
                  <p className='py-2 border-b mx-8'>Shelter and Infrastructure</p>
                  <p className='py-2 border-b mx-8'>Hygiene and Sanitation</p>
              </div>
              <button className='bg-primary-light w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Donate</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
