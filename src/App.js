import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home'
import Fourth from './components/Fourth'
import About from './components/About'
import Contact from './components/Contact'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header>
        <NavBar/>
      </Header>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/fourth" component={Fourth} />
        </Switch>
      </HashRouter>
   
    </div>
  );
}

export default App;
