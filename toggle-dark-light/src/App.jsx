import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Switch from "./Components/Switch";
import MoonIcon from "./Icons/MoonIcon";
import SunIcon from "./Icons/SunIcon";

const Container = styled.div`
  min-height: 100vh;
  text-align: center;
  padding-top: 10rem;
  background-color: ${(props) => props.theme.body};
  transition: all 0.5s ease;
  font-family: "Montserrat", sans-serif;
`;

const Name = styled.h1`
  margin: 1rem;
  color: ${(props) => props.theme.title};
`;
const Info = styled.p`
  margin: 1rem;
  color: ${(props) => props.theme.subtitle};
`;

const darkTheme = {
  body: "#1c1c1c",
  title: "#fff",
  subtitle: "#bbb",
  icon: "#bbb",
};
const lightTheme = {
  body: "#fff",
  title: "#1c1c1c",
  icon: "#1c1c1c",
  subtitle: "#333",
};

// https://www.youtube.com/watch?v=zgd-z3R1o2k&ab_channel=OnelightWebDev

function App() {
  const [theme, setTheme] = useState("dark");
  const isDark = theme === "dark";

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <SunIcon />
        <Switch toggleTheme={toggleTheme} isDark={isDark} />
        <MoonIcon />
        <Name> Matheus Camba</Name>
        <Info>Username: matheuscamba</Info>
        <Info>Email: matheuscamba@gmail.com</Info>
      </Container>
    </ThemeProvider>
  );
}

export default App;
