import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Recipes from './pages/recipes';
import RecipeDetails from './pages/recipe-details';
import Default from './pages/404';
import NavBar from './components/navigation/nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/recipe-details/:id" component={RecipeDetails} />
          <Route component={Default} />
        </Switch>
      </Router>
    );
  }
}

export default App;
