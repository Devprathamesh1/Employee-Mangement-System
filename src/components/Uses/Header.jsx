/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line no-unused-vars
const Header = ({data}) => {

    return (
      <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium '> Hello <br /> <span className='text-4xl font-semibold'>{data} 👋 </span></h1> 
      </div>
    )
 
  

};

export default Header