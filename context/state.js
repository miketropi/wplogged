import React, { useContext, createContext, useState, useEffect } from 'react';
import useResponsive from '../libs/useResponsive';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const { isMobile, isClient } = useResponsive();
  const [menuMobiStatus, setMobiMenuStatus] = useState(false);

  const onChangeMenuMenuStatus = (status) => {
    console.log(status);
    setMobiMenuStatus(status)
  }

  const value = {
    menuItems: [
      {
        name: 'Home',
        url: '/'
      },
      // {
      //   name: 'About Us',
      //   url: '/about',
      // },
      // {
      //   name: 'Contact',
      //   url: '/contact',
      // }
    ],
    isMobile: isClient ? isMobile : false,
    menuMobiStatus, onChangeMenuMenuStatus,
  };

  return <AppContext.Provider value={ value }>
    { children }
  </AppContext.Provider>
}

const useAppContext = () => {
  return useContext(AppContext);
}

export { useAppContext, AppProvider };