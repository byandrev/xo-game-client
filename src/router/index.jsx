import Home from "../pages/Home.jsx";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "*",
    element: <p>Not Found</p>
  }
]);

export default router;
