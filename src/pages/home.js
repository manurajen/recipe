import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/header/header';

export default class Home extends React.Component{
  render(){
    return(
      <>
        <Header styleClass="defaultHome" title="Amezing recipes here,...">
            <Link to="recipes" className="btn btn-info">Try Recipes</Link>

        </Header>
        <div className="container">
          <p className="align-center mt-5 mb-5 para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

      </>
    )
  }
}