import React from 'react';
import testimg from "../assets/success.png"

const Imageheader = () => {
  return (
    <div className='flex'>
    <img className='w-10' src={testimg} alt="" />
    <img className='w-10' src={testimg} alt="" />
 </div>
  );
}

export default Imageheader;
