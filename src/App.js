import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useContext } from "react";

import { UserContext } from "./store/user-context";
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
  const { loginUser, user } = useContext(UserContext);

  useEffect(() => {
    let token = localStorage.getItem("token-001");

    if (token && !user) {
      fetch('http://localhost:4000/check_user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        loginUser(data);
      })
      .catch(error => console.log('check user error', error));
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
