import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const MainWrapper = styled.main`
  width: 100%;
  height: 700px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  /* flex-direction: column;
  row-gap: 20px;
  padding: 15px; */

  /* border: 2px solid #fff;
  border-radius: 5px; */

  /* background-color: #4b6584; */
  position: relative;
  top: 348px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
  padding: 15px;

  width: 100%;
  height: 100px;

  border: 2px solid #fff;
  border-radius: 5px;
`;

function App() {
  const [pensamento, setPensamento] = useState([]);

  useEffect(() => {
    axios.get("https://api.kanye.rest/").then((response) => {
      console.log(response.data.quote);
      setPensamento(response.data.quote);
    });
  }, []);

  return (
    <>
      <MainWrapper>
        <ContentWrapper>
          <h1>Como diz Kayne West: </h1>
          {pensamento}
        </ContentWrapper>
      </MainWrapper>
    </>
  );
}

export default App;
