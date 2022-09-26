import "./Switch.css";

import React, { useState } from "react";
import "./Switch.css";

function Switch({ toggleTheme, isDark }) {
  const [isToggled, setIsToggled] = useState(isDark);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}
export default Switch;
