// // eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react'

// // eslint-disable-next-line react/prop-types
// const Login = ({ handleLogin }) => {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');


  
//   const submitHandler = (e) => {
//     e.preventDefault();
//     handleLogin(email, password);
//     setEmail('');
//     setPassword('');
//   };



//   return (
//     <div className='flex h-screen w-screen  items-center justify-center '>
//         <div className='border-2 border-red-600 p-12 rounded-full '>

//             <form onClick={(e)=> {submitHandler(e)}} className='flex flex-col items-center justify-center ' >

//                 <input value={email} onChange={(e)=>{setEmail(e.target.value)}}   required type="email" placeholder="Email" className="py-5 px-5 m-2 rounded-full border-2 outline-none bg-gray-600 text-xl text-white bg-transparent  " />
//                 <input value={password} onChange={(e)=>{setPassword(e.target.value)}} required type="password" placeholder="Password" className="py-5 px-5 m-2 border-2  rounded-full outline-none bg-gray-600 text-xl text-white bg-transparent  " />
//                 <input type="submit" value="Login" className="py-3 px-5 m-2 bg-yellow-600 rounded-full text-white text-2xl "/>
//             </form>

//         </div>


//     </div>
//   )
// }

// export default Login





// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Both fields are required!');
      return;
    }
    handleLogin(email, password);
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="flex h-screen w-screen bg-gradient-to-r from-blue-500 via-green-500 to-red-500 items-center justify-center">
      <div className="border-4 border-gray-600 p-16 rounded-full ">
        <form onSubmit={submitHandler} className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4 text-white-700">Login</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Email"
            className="py-2 px-4 m-2 w-64 rounded-md border outline-none bg-gray-200 text-gray-700"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Password"
            className="py-2 px-4 m-2 w-64 rounded-md border outline-none bg-gray-200 text-gray-700"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <input
            type="submit"
            value="Login"
            className="py-2 px-6 m-2 bg-yellow-600 rounded-md text-white text-lg hover:bg-yellow-700 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;