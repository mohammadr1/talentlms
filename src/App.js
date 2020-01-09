import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/sections/Header';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Welcome from './components/Welcome';

function App() {
  return (
   <div>
      <Header />
      <Route path="/" component={Home} exact={true}/>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/welcome" component={Welcome} />
    </div>
  );
}

export default App;
