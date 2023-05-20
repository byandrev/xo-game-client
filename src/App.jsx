import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { light } from "./theme";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "*",
    element: <p>Not Found</p>
  }
]);

function App() {
  return (
    <ThemeProvider theme={light}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
