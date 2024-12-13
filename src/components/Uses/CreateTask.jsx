// eslint-disable-next-line no-unused-vars
import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5  bg-[#1C1C1C] mt-7 rounded'>
    <form className='flex flex-wrap  w-full  items-start justify-between ' >
        <div className='w-1/2'>
       <div> 
        <h3 className='text-xl text-gray-400 mb-2'>Task Title</h3>
       <input type="text" placeholder="Enter Task Title" className="py-2 px-2 text-xl rounded outline-none bg-transparent border-[1px] mb-4 w-4/5"/>
       </div>
    
        <div>
            <h3 className='text-xl text-gray-400 mb-2 '>Date</h3>
        <input type="date" placeholder='Enter Date'  className="py-2 px-2 text-xl rounded outline-none bg-transparent border-[1px] mb-4 w-4/5 "/>
        </div>
       
       <div> 
        <h3 className='text-xl text-gray-400 mb-2'>Assign User</h3>
       <input type="text"  placeholder="Enter User Name"  className="py-2 px-2 text-xl rounded outline-none bg-transparent border-[1px] mb-4 w-4/5"/>
       </div>
       
       <div> 
        <h3 className='text-xl text-gray-400 mb-2'>category</h3>
       <input type="text" placeholder='dev , design , etc'  className="py-2 px-2 text-xl rounded outline-none bg-transparent border-[1px] mb-4 w-4/5" />
       </div>
       </div>
        
           <div className='w-2/5 flex flex-col items-start '>
            <h3 className='text-xl text-gray-400 mb-2'> Task Description</h3>
        <textarea className='py-2 px-4 text-xl rounded outline-none bg-transparent w-full h-44 border-[1px] ' name="" id="" cols="30" rows="10" ></textarea>
        <button className='text-white bg-yellow-600 px-[15.5vw] py-2 rounded-sm text-m mt-5 font-medium hover:bg-yellow-500'>Create Task</button>
        </div>
    
       
    
    </form>
    
    </div>
  )
}

export default CreateTask