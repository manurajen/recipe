import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/header/header';
export default class Default extends React.Component{
  render(){
    return(
      <>
        <Header title="Something went Wrong!..." styleClass="defaultPage" >
          <Link to="/" className="btn btn-warning">Return to Home</Link>
        </Header>
      </>
    )
  }
}