import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/Home";
import LoginPage from "../components/LoginPage";
import SignupPage from "../components/SignupPage";
import CartPage from "../pages/books/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
