import React, { useContext, useLayoutEffect, useEffect } from 'react';
import './App.css';
import { Outlet, Link, useRoutes, useNavigate, useParams } from "react-router-dom";
import Header from './common/components/Header';
import Routers from './Routers';
import Context from './context/Context';
function App() {
  const context = useContext(Context);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  })
  let navigate = useNavigate();
  const Redirectpath = (path) => {
    navigate(path, { replace: true });
  }
  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  let element = useRoutes(Routers(Redirectpath));

  return (
    <div >
      {element}
    </div>
  );
}

export default App;
