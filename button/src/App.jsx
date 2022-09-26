import { useState } from "react";
import "./App.css";
import styled from "styled-components";

const Button = styled.button`
  height: 100px;
  width: 400px;
  border: none;
  font-size: 25px;
  background-color: ${(props) => (props.color ? "#f13000" : "#fff")};
  color: ${(props) => (props.color ? "#000" : "#646cffaa;")};
  cursor: pointer;
  border-radius: 10px;
  margin-right: 50px;
  outline: none;
`;

function App() {
  const [state, setState] = useState(true);
  const [color, setColor] = useState(true);

  function handleButton() {
    setState(!state);
  }

  function handleChange() {
    console.log("clicado");
    setColor(!color);
  }

  return (
    <div className="App">
      <button
        className={state ? "button" : "button-cornao"}
        onClick={handleButton}
      >
        {state ? "Cor Sim" : "CorNão"}
      </button>
      <Button color={color} onClick={handleChange}>
        ChangeColor
      </Button>
    </div>
  );
}

export default App;
