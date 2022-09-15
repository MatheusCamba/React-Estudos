import React from "react"
import data from '../src/MOCK_DATA.json'

import styled from "styled-components"
import { useState } from "react"

const Input = styled.input`
  display: flex;
  width: 372px;
  height: 35px;
  padding-left: 10px;
  margin: 35px 0;
  
  border: 1px solid #fff;
  border-radius: 3px;


  font-size: 20px;
  background: #c0c0c0;
  outline: none;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: auto;

  p {
    margin-bottom: 25px;
  }
`

function App() {
  
  const [search, setSearch] = useState('')



  return (
    <Container>
      <Input placeholder="Digite um nome" onChange={e => setSearch(e.target.value)}/>
      {/* <div>{search}</div> */}
      {
        data.filter((data) => {
          if(search == ""){
            return <p>Digite um nome</p>
          } else if(data.first_name.toLowerCase().includes(search.toLowerCase())){
            return data
          }
        })
        .map((info) => {
          return (
            <div key={info.id}> <p>{info.first_name}</p></div>
          )
        })
      }

    </Container>
  )
}

export default App
