import React from "react";

const overlay = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgb(0,0,0,0.7)",
  zIndex: "1000",
};

const containerModal = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  padding: "24px",
  backgroundColor: "#fff",
  width: "600px",
  height: "460px",
  borderRadius: "5px",
  color: "#000",
  alignItems: "center",
};

const styleButton = {
  backgroundColor: "transparent",
  color: "black",
  fontSize: "20px",
  width: "100px",
  position: "relative",
  left: "284px;",
  outline: "none",
};

function Modal({ id = "modal", closeModal = () => {}, children }) {
  const handleCloseOverlay = (e) => {
    if (e.target.id === id) closeModal();
  };

  return (
    <div style={overlay} id={id} onClick={handleCloseOverlay}>
      <div style={containerModal}>
        <button onClick={closeModal} style={styleButton}>
          x
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
