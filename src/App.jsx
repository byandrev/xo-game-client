import { Button, ButtonLight } from "./components/base/Buttons.jsx";
import { ThemeProvider } from "styled-components";
import { light } from "./theme";
import Title from "./components/base/Title.jsx";

function App() {
  return (
    <ThemeProvider theme={light}>
      <Title>XO Game</Title>
      <Button>Login</Button>
      <ButtonLight>Sign Up</ButtonLight>
    </ThemeProvider>
  );
}

export default App;
