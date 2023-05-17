import { useState, useEffect } from "react";

export function useWindowWidth(width){
  const [isScreenSmall, setIsScreenSmall] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsScreenSmall(window.innerWidth < width)
    }
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return isScreenSmall
}