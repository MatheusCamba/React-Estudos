import React from "react";
import { useState } from "react";
import {
  WrapperBanner,
  Title,
  Text,
  WrapperButtons,
  WrapperContent,
  ButtonGetIt,
  ButtonClose,
  WrapperCloseButton
} from "./style";
import { IoMdClose } from "react-icons/io";

export const CookieBanner = () => {

  const [showBanner, setShowBanner] = useState(false);

  useState(() => {
    const timeOut = setTimeout(() => {
      setShowBanner(true);
    }, 3000)

    return () => clearTimeout(timeOut);
  }, []);

  if(!showBanner) {
    return null;
  }

console.log(showBanner)

  return (
    <WrapperBanner show={showBanner}>
      <Title>COOKIES</Title>
      <WrapperContent>
        <Text>
          Coletamos dados para melhorar o desempenho de seguranca do site, além
          de personalizar conteúdo e anúncios. Voce pode configurar suas
          preferencias em nosso site e conferir nossa{" "}
          <a href="#">POLÍTICA DE COOKIES</a>
        </Text>
        <WrapperButtons>
          <a href="#">Personalizar Escolhas</a>
          <ButtonGetIt>Entendi</ButtonGetIt>
        </WrapperButtons>
        <WrapperCloseButton>
          <ButtonClose onClick={() => {showBanner ? setShowBanner(!showBanner) : showBanner} }>
            <IoMdClose size={30} color="#555"/>
          </ButtonClose>
        </WrapperCloseButton>
      </WrapperContent>
    </WrapperBanner>
  );
};
