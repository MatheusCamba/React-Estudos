/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });
  useEffect(() => {
    if(typeof window !== "undefined"){
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth, // o window.innerWidth, bem como o window.innerHeight, sao metodos DOM onde podemos pegar o tamanho da tela.
          height: window.innerHeight
        }) // nesse caso, cada vez que muda o estado windowSizee é atualizado.
      }
      window.addEventListener('resize', handleResize) //esse evento é escutado quando o usuario redimensiona a tela.

      handleResize()

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [])
}