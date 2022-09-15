import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Titulo = styled.h1`
  margin: 30px 0 24px;
  font-size: 40px;
`;

export const Input = styled.input`
  width: 50%;
  padding: 15px 10px;
  margin-bottom: 30px;
  font-size: 15px;
  background-color: #e6e6e6;
  border-radius: 5px;
  border: none;
`;

export const Button = styled.button`
  width: 50%;
  height: 34px;
  background-color: #ea4c89;
  color: #fff;

  cursor: pointer;
  border-radius: 5px;
  margin: 12px 0 84px;
  border: none;
  font-size: 15px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ContainerHeader = styled.div`
  margin: 84px 0 24px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-left: 7px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;
