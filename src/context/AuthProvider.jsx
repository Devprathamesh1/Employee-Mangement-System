// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Populate local storage with data if not already set
    if (!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
      setLocalStorage(); // Initialize local storage with employee/admin data
    }

    // Retrieve data from local storage
    const { employees, admin } = getLocalStorage() || {};
    setUserData({ employees, admin });
  }, []);

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
