import { Button, ButtonLight } from "./components/base/Buttons.js";
import { ThemeProvider } from "styled-components";
import { light } from "./theme";

function App() {
  return (
    <ThemeProvider theme={light}>
      <h1>Hello</h1>
      <Button>Login</Button>
      <ButtonLight>Sign Up</ButtonLight>
    </ThemeProvider>
  );
}

export default App;
