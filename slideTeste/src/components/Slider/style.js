import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 560px;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  flex-direction: column;

  img {
    width: 540px;
    height: 340px;
    object-fit: cover;
  }
`;

export const ContainerButtons = styled.div`
  width: 350px;
  height: 45px;
  display: flex;
  justify-content: space-around;
  padding-top: 8px;
`;

export const Button = styled.button`
  width: 95px;
  height: 40px;
  font-size: 24px;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;
