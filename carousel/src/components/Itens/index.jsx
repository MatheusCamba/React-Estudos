import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function Itens(props) {
  return (
    <Paper style={{ paddingBottom: "30px", background: "#bbb" }}>
      <img
        src={props.item.url}
        alt={props.item.name}
        style={{
          width: "100%",
          height: "45vh",
          objectFit: "contain",
          marginTop: "30px",
        }}
      />
      <h2
        style={{
          fontFamily: "sans-serif",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {props.item.name}
      </h2>

      <Button
        variant="contained"
        className="CheckButton"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "20%",
          position: "relative",
          left: "40%",
        }}
      >
        Check it out!
      </Button>
    </Paper>
  );
}

export default Itens;
