/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const TaskList = ({data}) => {
  return (
    <div  id ='tasklist' className=' h-[55%] flex justify-start overflow-x-scroll items-center flex-nowrap gap-5 py-5  mt-10 '>

        <div className='flex-shrink-0 w-[300px] h-full p-5 bg-yellow-500 rounded-xl'>
           <div className='flex justify-between items-center '>
             <h3 className='text-sm bg-red-600 px-3 py-1 rounded '>high</h3>
             <h3>20 feb 2024</h3>
           </div>
           <h2 className='text-2xl mt-5 font-semibold'>make a bitcoin transaction</h2>
           <p className='text-sm mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus eligendi, a aperiam quod magnam maiores.</p>
           
        </div>


        <div className='flex-shrink-0 w-[300px] h-full p-5 bg-green-500 rounded-xl'>
        <div className='flex justify-between items-center '>
             <h3 className='text-sm bg-red-600 px-3 py-1 rounded '>high</h3>
             <h3>20 feb 2024</h3>
           </div>
           <h2 className='text-2xl mt-5 font-semibold'>make a bitcoin transaction</h2>
           <p className='text-sm mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus eligendi, a aperiam quod magnam maiores.</p>
           
        </div>

        <div className='flex-shrink-0 w-[300px] h-full p-5 bg-blue-500 rounded-xl'>
        <div className='flex justify-between items-center '>
             <h3 className='text-sm bg-red-600 px-3 py-1 rounded '>high</h3>
             <h3>20 feb 2024</h3>
           </div>
           <h2 className='text-2xl mt-5 font-semibold'>make a bitcoin transaction</h2>
           <p className='text-sm mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus eligendi, a aperiam quod magnam maiores.</p>
           
        </div>

        <div className='flex-shrink-0 w-[300px] h-full p-5 bg-orange-500 rounded-xl'>
          <div className='flex justify-between items-center '>
             <h3 className='text-sm bg-red-600 px-3 py-1 rounded '>high</h3>
             <h3>20 feb 2024</h3>
           </div>
           <h2 className='text-2xl mt-5 font-semibold'>make a bitcoin transaction</h2>
           <p className='text-sm mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus eligendi, a aperiam quod magnam maiores.</p>
           
        </div>

        
        
    </div>
  )
}

export default TaskList