import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layouts/root-layout";
import ErrorPage from "./components/error/errorpage";
import Homepage from "./pages/homepage";
import Aboutpage from "./pages/aboutpage";
import Contactpage from "./pages/contactpage";

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
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
