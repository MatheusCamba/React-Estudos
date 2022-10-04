import styled from "styled-components";

const IconImg = styled.img`
  font-size: 1em;
  width: 24px;
  height: 24px;
  background: #202020;
  color: #ffffff;
  border-radius: 50%;
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px -20px 60px rgba(151, 151, 151, 0.1),
    0px 20px 60px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);

  position: relative;
  left: 200px;
  top: 20px;
`;

export function Icon({ src, alt }) {
  return <IconImg src={src} alt={alt} />;
}
