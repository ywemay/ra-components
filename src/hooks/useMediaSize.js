import React, { useState, useEffect } from 'react';

export function useMediaSize({ max } = { max: 830}) {
  const [ isSmall, setIsSmall ] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${max || 830}px)`);

    setIsSmall(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsSmall(e.matches);
    };

    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    };
  }, []);

  return { isSmall }
}