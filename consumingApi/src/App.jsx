import React, { useCallback } from "react";
import styled, {keyframes} from "styled-components";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

const MainWrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* row-gap: 20px; */
  gap: 20px;
  padding: 15px;
  margin: 15px;
  /* width: 100%;
  height: 100px; */

  border: 2px solid #fff;
  border-radius: 5px;
`;

const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin: 30px;
  gap: 22px;
  background-color: #7199b1;
  border: 2px solid #fff;
  border-radius: 5px;
`;

const WrapperGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Input = styled.input`
  padding: 5px;
  outline: none;
`;

// Animação do loading
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Button = styled.button`
  padding: 5px;
  width: 100%;
  height: 36px;
  font-weight: bold;
  font-size: 20px;
  cursor: ${(props) => (props.loading ? 'not-allowed' : 'pointer')};
  background-color: #007bff;
  position: relative;
  display: inline-block;

  

  &:before {
    content: '';
    position: absolute;
    /* top: 50%;
    left: 50%; */
    bottom: 5px;
    right: 40%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-top-color: #ffffff;
    animation: ${spinAnimation} 1s linear infinite;
    opacity: ${props => (props.loading ? '1' : '0')};
    visibility: ${props => (props.loading ? 'visible' : 'hidden')};
  }

`;

  const spin = keyframes`
    0% {
      transform: rotate(0);
    } 100% {
      transform: rotate(360deg);
    }
  `

  const LoadingSpinner = styled(AiOutlineLoading3Quarters)`
    animation: ${spin} 1800ms infinite linear;
    font-size:16px;
    
  `

  const ButtonSubmit = styled.button`
    padding: 16px 32px;
    font-size:18px;
    border-radius: 100rem;

    cursor: pointer;
  `

function App() {
  const [requestsGet, setRequestsGet] = useState([]);
  const wasRequested = useRef(false);
  const [loading, setLoading] = useState(false);
  const FormRef = useRef(null);

  const getAll = useCallback(async () => {
    if (wasRequested.current) {
      return;
    }

    wasRequested.current = true;

    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setRequestsGet(data);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
   
    const title = FormRef.current.title.value;
    const body = FormRef.current.body.value;
    const userId = FormRef.current.userId.value;
    const userIdNumber = parseInt(userId, 10);

    await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
      userId: userIdNumber,
    }).then(response => {console.log(response.data)})

    setLoading(false);

    FormRef.current.title.value = ""
    FormRef.current.body.value = ""
    FormRef.current.userId.value = ""

    
    console.log("ENVIADO");
  };

  useEffect(() => {
    getAll();
  }, [getAll, handleSubmit]);

  return (
    <MainWrapper>
      <WrapperForm onSubmit={handleSubmit} ref={FormRef}>
        <WrapperGroup>
          <label htmlFor="title">Title</label>
          <Input type="text" id="title" />
        </WrapperGroup>
        <WrapperGroup>
          <label htmlFor="body">Body</label>
          <textarea type="" id="body" />
        </WrapperGroup>
        <WrapperGroup>
          <label htmlFor="userId">UserId</label>
          <Input type="text" id="userId" />
        </WrapperGroup>
        {/* <ButtonLoading loading={loading} type="submit" >{loading ? null : 'Clique Aqui'}</ButtonLoading> */}
        {/* <Button loading={loading} type="submit">{loading ? null : 'Clique Aqui'}</Button> */}
        <ButtonSubmit>{loading ? <LoadingSpinner/> : 'Submit'}</ButtonSubmit>
        
      </WrapperForm>

      {requestsGet.map((request) => (
        <ContentWrapper
          style={{ color: "#000", fontWeight: "bold", fontSize: "10px" }}
          key={request.id}
        >
          <h3>{request.title}</h3>
          <h3>{request.body}</h3>
          <h3>{request.useId}</h3>
        </ContentWrapper>
      ))}
    </MainWrapper>
  );
}

export default App;
