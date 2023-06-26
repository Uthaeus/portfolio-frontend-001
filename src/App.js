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
import BlogLayout from "./components/layouts/blog-layout";
import Blogs from "./pages/blogs";
import BlogDetail from "./components/blogs/blog-detail";
import NewBlog from "./components/blogs/new-blog";
import EditBlog from "./components/blogs/edit-blog";
import PortfolioLayout from "./components/layouts/portfolio-layout";
import Portfolio from "./pages/portfolio";
import PortfolioDetail from "./components/portfolio/portfolio-detail";
import EditPortfolio from "./components/portfolio/edit-portfolio";
import NewPortfolio from "./components/portfolio/new-portfolio";

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
  },
  {
    path: '/blogs',
    element: <BlogLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Blogs />
      },
      {
        path: '/blogs/:id',
        element: <BlogDetail />
      },
      {
        path: '/blogs/new',
        element: <NewBlog />
      },
      {
        path: '/blogs/:id/edit',
        element: <EditBlog />
      }
    ]
  },
  {
    path: "/portfolio",
    element: <PortfolioLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Portfolio />
      },
      {
        path: "/portfolio/:id",
        element: <PortfolioDetail />
      },
      {
        path: "/portfolio/:id/edit",
        element: <EditPortfolio />
      },
      {
        path: "/portfolio/new",
        element: <NewPortfolio />
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
