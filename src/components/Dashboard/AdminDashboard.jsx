// // eslint-disable-next-line no-unused-vars
// import React from 'react'
// import Header from '../Uses/Header'
// import CreateTask from '../Uses/CreateTask'
// import AllTask from '../Uses/AllTask'


// const AdminDashboard = () => {
//   return (
//     <div className='p-7 h-screen w-full '>

//     <Header/>
//     <CreateTask/>
//     <AllTask/>    


//     </div>
//   )
// }

// export default AdminDashboard

// eslint-disable-next-line no-unused-vars
import React from 'react';
import AllTask from './../Uses/AllTask';
import CreateTask from './../Uses/CreateTask';
import Header from './../Uses/Header';

// eslint-disable-next-line react/prop-types
const AdminDashboard = ({ handleLogout }) => {
  return (
    <div className="p-7 h-full w-full  bg-gradient-to-r from-pink-300 via-purple-600 to-violet-400 ">
         <Header/>
    <CreateTask/>
   <AllTask/>    
    
      <div className='flex justify-center mt-10'>
      <button 
        onClick={handleLogout}
        className="text-white bg-orange-600 px-10 py-3 rounded-sm text-xl font-medium hover:bg-orange-500 flex items-center " 
      > Logout 
      </button>
      </div>

    </div>
  );
};

export default AdminDashboard;