/* eslint-disable react/prop-types */
// // eslint-disable-next-line no-unused-vars
// import React from 'react'
// import Header from '../Uses/Header'
// import TaskSampleNumber from '../Uses/TaskSampleNumber'
// import TaskList from '../TaskList/TaskList'

// const EmployeeDashboard = () => {
//   return (
//     <div className='p-12 bg-[#1C1C1C] h-screen'>

//     <Header/>
//     <TaskSampleNumber/>
//   <TaskList/>

//     </div>
//   )
// }

// export default EmployeeDashboard




// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from './../Uses/Header';
import TaskSampleNumber from './../Uses/TaskSampleNumber';
import TaskList from './../TaskList/TaskList';

// eslint-disable-next-line react/prop-types, no-unused-vars
const EmployeeDashboard = ({ handleLogout, data}) => {
  




  
  return (

    <div className="p-12  bg-gradient-to-r from-pink-300 via-purple-600 to-violet-400 h-full">
   
   <Header data={data}/>
  <TaskSampleNumber data={data}/>
    <TaskList data={data}/>

      <div className="flex justify-center mt-10">
      <button
        onClick={handleLogout}
        className="text-white bg-orange-600 px-10 py-3 rounded-sm text-xl font-medium hover:bg-orange-500 flex items-center"
      > Logout
      </button>
      </div>

    </div>
  );
};

export default EmployeeDashboard;