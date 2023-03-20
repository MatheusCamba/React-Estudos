import React, { useState } from "react";

import "./App.css";
import Modal from "./Modal";

const containerContent = {
  display: "flex",
  flexDirection: "column",
  width: "17vw",
  height: "90vh",
  gap: "20px",
};

const containerGroup = {
  display: "flex",
  gap: "15px",
};

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <h1>Criando modal</h1>
      <button onClick={() => setOpen(true)}>NewModal</button>
      {open && (
        <Modal closeModal={() => setOpen(false)}>
          <>
            <h1>Sign in</h1>
            <form style={containerContent}>
              <div className="formGroup" style={containerGroup}>
                <label htmlFor="email">Email:</label>
                <input type="text" />
              </div>
              <div className="formGroup" style={containerGroup}>
                <label htmlFor="password">Password:</label>
                <input type="password" />
              </div>
              <button>Submit</button>
            </form>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium, repellendus.
            </p>
          </>
        </Modal>
      )}
    </div>
  );
}

export default App;
