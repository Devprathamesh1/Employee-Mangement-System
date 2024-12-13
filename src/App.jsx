// eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from 'react';
//  import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
// import AdminDashboard from './components/Dashboard/AdminDashboard'
//  import Login from './components/Auth/Login';
// // import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';

// const App = () => {


// // eslint-disable-next-line no-unused-vars
// const [user, setUser] = useState(null)


// const handleLogin = (email,password)=>{

//   if (email === 'admin@me.com' && password === '123') {
//     console.log("this is admin");
//     setUser('admin');
//   } else if (email === 'user@me.com' && password !== '123') {
//     console.log("this is a user");
//     setUser('user');
//   } else {
//     alert("this is not admin");
//   }
// }


// // run the code 


// // useEffect(() => {

// // //setLocalStorage()
// //  getLocalStorage()
// // },)


 
//   return (
//     <>
    
//    {!user ? <Login handleLogin={handleLogin}  /> : ''} 
//    {user === 'admin' ? <AdminDashboard /> : ''}
//    {user === 'user' ? <EmployeeDashboard /> : ''}

 
//     </>
//   )
// }

// export default App;


// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import Login from './components/Auth/Login';
//import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';


const App = () => {
  const [user, setUser] = useState(null)
  
const [loggedInUserData, setLoggedInUserData] = useState(null)

  const AuthData = useContext(AuthContext)
 
  // useEffect(() => {

  //   if(AuthData) {
  //  // eslint-disable-next-line no-unused-vars
  //  const loggedInUser = localStorage.getItem('loggedInUser')
  //  if(loggedInUser) {
  //   setUser(loggedInUser.role)
  //  }
  //   }
  // }, [AuthData]);
  
  

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'})) 

    } else if (AuthData) {
     const employee = AuthData.employees.find((e)=>email == e.email && password == e.password)

     if(employee) {

      setUser('employee')
    setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'})) 

     }
    

    } else {
      alert('Invalid credentials');
    }
  };

  // Persist user in local storage
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  useEffect(() => {
    if (user) {
     localStorage.setItem('user', user);
    }
  }, [user]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };


  // eslint-disable-next-line no-unused-vars

 
  

  return (
    <>
      {!user ? (<Login handleLogin={handleLogin} />  ) 
      : user === 'admin' ? ( <AdminDashboard  handleLogout={handleLogout} /> ) 
      : user === 'employee' ? ( <EmployeeDashboard data={loggedInUserData} handleLogout={handleLogout} /> ) : null
    }
    </>
  );
};

export default App;


