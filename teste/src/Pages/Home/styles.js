import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  background-color: #f7cb15;
  height: 70px;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #040303;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Input = styled.input`
  color: #040303;
  width: 50%;
  height: 50px;
  margin-top: 80px;
  background-color: #f5f5f5;
  border-radius: 10px;

  font-size: 16px;
  outline: none;
`;
export const Button = styled.button`
  width: 50%;
  height: 20px;
  background-color: #f7cb15;
  margin-top: 60px;
  border-radius: 10px;
  height: 50px;
  font-size: 20px;
  cursor: pointer;
`;
