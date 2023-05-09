import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(0%);
  }

  to {
    opacity: 1;
    transform: translateY(-0.5%);
  }

`

export const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(-0.5%);
  }

  to {
    opacity: 0;
    transform: translateY(0%);
    /* animation-duration: 3s; */
  }
`


export const WrapperBanner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  position: fixed;
  /* top: 0; */
  bottom: 0;
  animation: ${({show}) => show ? fadeIn : fadeOut} 0.5s ease-out;
`;

export const Title = styled.h3`
  display: flex;
  font-size: 1.2em; //19px
  color: #000;
  padding-bottom: 10px;
  
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 80px; //145

 @media screen and (max-width: 880px){
  flex-direction: column;
  gap: 10px;
 }

`

export const Text = styled.p`
  font-size: .813em; //13px
  line-height: 1.5;
  color: #000;
  padding-right: 14px;
  text-align: left;
  /* padding-right: 80px; */
  a {
    color: #3860BE;
    font-weight: bold;
  }
`

export const WrapperButtons = styled.div`
  display: flex;
  padding: 10px;
  width: 35%;
  height: auto;
  font-size: 16px;
  justify-content: space-between;
  align-items: center;
  /* margin-right: 115px; */

  a {
    display: flex;
    margin-right: 20px;
    text-align: center;
    color: #730036;
    text-decoration: underline;
    font-weight: 600;
    letter-spacing: 0.01em;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin: 0;
    gap: 20px;
    a {
      margin: 0;
      text-align: center;
    }
}
`

export const WrapperCloseButton = styled.div`
  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 20px;
    right: 9px;
  }

`

export const ButtonGetIt = styled.button`
  background-color: #730036;
  border-color: #730036;
  color: #fff;
  padding: 12px 10px;
  font-size: .813em; //13px
  min-width: 125px;
  font-weight: 600;
  line-height: 1.2;
  word-wrap: break-word;
  font-family: inherit;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #bbb;
  
  
`

export const ButtonClose = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`
