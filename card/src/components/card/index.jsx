import styled from "styled-components";

import { Chip } from "../chip";
import { Icon } from "../seta";

import icone from "../../assets/ICLINIC_ENDOSSO_AFYA_6 5.png";
import seta from "../../assets/Icon.svg";

const CardContainer = styled.div`
  width: 282px;
  height: 280px;
  border: 1px solid #333333;
  border-radius: 12px;
  background: #262626;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* padding-left: 23px;
  padding-top: 23px;
  padding-right: 25px; */
  padding: 23px 0 0 23px;

  /* img {
    margin: 30px 0;
  } */

  span {
    width: 233px;
    height: 60px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.5px;
    color: #cccccc;
    text-align: left;
  }
`;

const Titulo = styled.img`
  margin: 30px 0;
`;

// const ContainerSeta = styled.div`
//   width: 100%;
//   height: 25px;
//   justify-content: center;
//   align-items: flex-end;
//   background: #f6f6;
//   margin-top: 30px;
// `;

export function Card({ children }) {
  return (
    <CardContainer>
      <Chip children={"15% OFF"} width={"67px"} background="#27AE60" />
      <Titulo src={icone} alt="icone" />
      <span>{children}</span>
      <Icon src={seta} alt={"icone da seta"} />
    </CardContainer>
  );
}
