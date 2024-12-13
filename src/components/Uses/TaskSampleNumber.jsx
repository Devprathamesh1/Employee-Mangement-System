/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const TaskSampleNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>

        <div className='w-[45%] py-6 px-9 rounded-3xl bg-red-600 '>
            <h2 className='text-2xl  font-semibold'>{data}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='w-[45%] py-6 px-9 rounded-3xl bg-blue-600 '>
            <h2 className='text-2xl  font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='w-[45%] py-6 px-9 rounded-3xl bg-green-600 '>
            <h2 className='text-2xl  font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='w-[45%] py-6 px-9 rounded-3xl bg-yellow-500 '>
            <h2 className='text-2xl  font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

    </div>
  )
}

export default TaskSampleNumber