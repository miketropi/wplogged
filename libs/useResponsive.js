import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function useResponsive() {
  const [isClient, setIsClient] = useState(false);

  const isMobile = useMediaQuery({
    maxWidth: 500
  });

  // useLayoutEffect(() => {
  //   if (typeof window !== 'undefined') setIsClient(true);
  // }, []);

  useEffect(() => {
    setIsClient(process.browser)
  })

  return {
    isMobile: isClient ? isMobile : false,
    isClient
  }; 
}