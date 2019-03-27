import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class RecipeDetailsCom extends Component {

  render(){
    const { image_url,title,ingredients,publisher,source_url,publisher_url} = this.props.dataDetails;

    return (
      <div>
        <Link to="/recipes">Back to Recieps</Link>
        <div>
          <img src={image_url} style={{height:"100px"}} />
          <div>
            <h5>{title}</h5>
            <h6>{publisher}</h6>
            <a href={publisher_url} target="_blank" rel="noopener noreferrer">Publisher URL</a>
            <a href={source_url} target="_blank" rel="noopener noreferrer">Recipe URL</a>
          </div>
          <div>
            <h2>Ingredients</h2>
            {ingredients.map((item,index) => {
              return (
                <li key={index}>{item}</li>
              );
            })}
          </div>
        </div>
      </div>
    )
  }
}