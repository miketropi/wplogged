import React, { useState, useLayoutEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function useResponsive() {
  const [isClient, setIsClient] = useState(false);

  const isMobile = useMediaQuery({
    maxWidth: 500
  });

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true);
  }, []);

  return {
    isMobile: isClient ? isMobile : false,
    isClient
  }; 
}