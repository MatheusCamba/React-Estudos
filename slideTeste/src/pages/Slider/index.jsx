import React from "react";
import Slider from "../../components/Slider";

const images = [
  "https://cdn.pixabay.com/photo/2023/01/29/00/16/drums-7751985_960_720.jpg",
  "https://cdn.pixabay.com/photo/2023/01/19/21/19/beach-7730209_960_720.jpg",
  "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_960_720.jpg",
  "https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_960_720.jpg",
];

const Slide = () => (
  <div>
    <Slider images={images} />
  </div>
);

export default Slide;
