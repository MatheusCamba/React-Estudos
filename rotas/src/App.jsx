import { GlobalStyle } from "./globalStyled";

import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Vasco } from "./pages/Vasco";
import { Botafogo } from "./pages/Botafogo";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vasco" element={<Vasco />} />
        <Route path="/botafogo" element={<Botafogo />} />
      </Routes>
    </>
  );
}

export default App;
