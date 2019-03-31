import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class RecipeListCom extends Component {
  render(){
    const {recipes} = this.props;
    return (
      <div className="container mt-4">
        <h2>Recipe List</h2>
        <div className="row">
         {recipes.map(item => (
           <div key={item.recipe_id} className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="card" style={{width:"18rem"}}>
                <img className="card-img-top" src={item.image_url} alt="Card image cap" />
                <div className="card-body">
                  <h6 className="card-title">{item.title}</h6>
                  <p className="card-text">{item.publisher}</p>
                  <Link to={`/recipe-details/${item.recipe_id}`}  className="btn btn-warning">Details</Link>
                  <a href={item.source_url} target="_blank" rel="noopener noreferrer"  className="btn btn-primary ml-3">Website Link</a>
                </div>
              </div>
           </div>
         ))}
        </div>
      </div>
    )
  }
}