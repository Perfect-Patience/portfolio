import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";



const router = createBrowserRouter([
   {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/about",
        Component: About
      },
      {
        path: "/portfolio",
        Component: Portfolio
      },
      {
          path: "/contact",
          Component: Contact
      }
    ]
   }
])

function App(){
  return <RouterProvider router={router}/>

}

export default App;