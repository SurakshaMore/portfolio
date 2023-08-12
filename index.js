// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./src/components/body";
import { About } from "./src/components/about";
import { Projects } from "./src/components/project";
import { Skills } from "./src/components/skills";
import { Header } from "./src/components/header";
import { Contact } from "./src/components/contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Body />
      {/* <Footer /> */}
    </>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/aboutme",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);


const rootEl = document.getElementById("root");
const rootCr = ReactDOM.createRoot(rootEl);
rootCr.render(<RouterProvider router={appRouter}/>);
