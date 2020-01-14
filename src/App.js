import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/sections/Header';
// import { Route, Link } from 'react-router-dom';
import { Switch, Route } from "react-router-dom"; 
import routes from "../src/Routes";

function App() {
  return (
   <div>
      <Header />
      <Switch>
        { routes.map( route => <Route key={ route.path } { ...route } /> ) }
      </Switch>
    </div>
  );
}

export default App;
