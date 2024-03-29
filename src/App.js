import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Services from './components/Servicess';
import Products from './components/Products';
import SignUp from './components/SignUp';


function App() {
  return (

    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
