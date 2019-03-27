import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/header/header';

export default class Home extends React.Component{
  render(){
    return(
      <>
        <Header styleClass="defaultHome">
            <Link to="recipes">Try Recipes</Link>
        </Header>
        <h1>From Home Components</h1>
      </>
    )
  }
}