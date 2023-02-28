import React, { useState } from "react";
import { MainContainer, ContainerButtons, Button } from "./style";

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (
    <MainContainer>
      <img src={images[currentImageIndex]} alt="Slider" />
      <ContainerButtons>
        <Button onClick={handlePrevClick}>Prev</Button>
        <Button onClick={handleNextClick}>Next</Button>
      </ContainerButtons>
    </MainContainer>
  );
};

export default Slider;
