import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { light } from "./theme";
import router from "./router/index.jsx";

function App() {
  return (
    <ThemeProvider theme={light}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
