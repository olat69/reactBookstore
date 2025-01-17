import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/Home";
import LoginPage from "../components/LoginPage";
import SignupPage from "../components/SignupPage";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";
import BookPreview from "../pages/books/BookPreview";

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
      {
        path: "/checkoutpage",
        element: <CheckoutPage />,
      },
      {
        path: "/checkoutpage",
        element: <CheckoutPage />,
      },
      {
        path: "/books/:id",
        element: <BookPreview />,
      },
    ],
  },
]);

export default router;
