import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/header/header';
export default class Default extends React.Component{
  render(){
    return(
      <>
        <Header title="404" styleClass="defaultPage" >
          <Link to="/">Return to Home</Link>
        </Header>
      </>
    )
  }
}