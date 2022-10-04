import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
// import { HomeIcon } from "@mui/icons-material";
// import { IconButton } from "@mui/icons-material";
import { Checkbox, FormControlLabel } from "@mui/material";

import "./App.css";

function CheckboxExemple() {
  const [checked, setChecked] = useState(true);

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
          label="testando checkbox"
        />
      }
    />
  );
}

function App() {
  return (
    <div className="App">
      <CheckboxExemple />
      <ButtonGroup variant="contained" size="large" color="primary">
        <Button
          startIcon={<SaveIcon />}
          style={{ marginRight: 30, outline: "none" }}
        >
          Save
        </Button>
        <Button startIcon={<DeleteIcon />} style={{ outline: "none" }}>
          Discard
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
