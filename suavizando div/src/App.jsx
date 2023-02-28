import "./App.css";
import styled from "styled-components";
import { useState } from "react";

const DivMain = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
  opacity: ${(props) => props.opacity};
  transition: opacity 1s;
`;

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <DivMain opacity={show ? "1" : "0"}> DivMain </DivMain>
      <button style={{ margin: 20 }} onClick={() => setShow(!show)}>
        show div
      </button>
    </div>
  );
}

export default App;
