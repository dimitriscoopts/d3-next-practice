import React, { createContext, useContext, useEffect, useState } from 'react';
// import Cookies from 'universal-cookie';
// const cookies = new Cookies();

// We are creating / initializing the Context first
const DashboardContext = createContext();

// Provider component
/*
The EditorProvider component is a "provider" for the DashboardContext. 
It provides ALL functions, properties etc.. we want to access on the
wrapped component and its children.
(The children prop is rendered within this provider, 
allowing any components wrapped with EditorProvider 
to access the provided context).
*/


export const DashboardContextProvider = ({ children }) => {

  // Global States
  const [userData, setUserData] = useState(50);



  return (
    <DashboardContext.Provider value={{
      userData,
      setUserData,
    }}>
      {children}
    </DashboardContext.Provider>
  );
};


export const useDashboardContext = () => {
  return useContext(DashboardContext);
};