import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class RecipeListCom extends Component {
  render(){
    const {recipes} = this.props;
    return (
      <div>
        <h2>Recipe List</h2>
        <ul>
         {recipes.map(item => (
           <li key={item.recipe_id}>
              <div>
                <img src={item.image_url} style={{height:'100px'}} />
                <div>
                  <h5>{item.title}</h5>
                  <h6>{item.publisher}</h6>
                  <div>
                    <Link to={`/recipe-details/${item.recipe_id}`}>Details</Link>
                    <a href={item.source_url} target="_blank" rel="noopener noreferrer">Website Link</a>
                  </div>
                </div>
              </div>
           </li>
         ))}
        </ul>
      </div>
    )
  }
}