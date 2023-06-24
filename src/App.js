import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layouts/root-layout";
import ErrorPage from "./components/error/errorpage";
import Homepage from "./pages/homepage";
import Aboutpage from "./pages/aboutpage";
import Contactpage from "./pages/contactpage";
import SignIn from "./components/auth/sign-in";
import SignUp from "./components/auth/sign-up";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "/about",
        element: <Aboutpage />
      },
      {
        path: "/contact",
        element: <Contactpage />
      },
      {
        path: "/sign-in",
        element: <SignIn />
      },
      {
        path: "/sign-up",
        element: <SignUp />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
