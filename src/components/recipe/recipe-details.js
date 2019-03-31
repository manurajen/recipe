import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class RecipeDetailsCom extends Component {

  render(){
    const { image_url,title,ingredients,publisher,source_url,publisher_url} = this.props.dataDetails;

    return (
      <div className="container mb-5">
        <Link to="/recipes" className="btn btn-danger mt-4 mb-4">Back to Recieps</Link>
        <div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <img src={image_url} style={{width:"100%"}} />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="mb-3">
                <h2 className="text-uppercase">{title}</h2>
                <h6>{publisher}</h6>
                <a href={publisher_url} target="_blank" rel="noopener noreferrer" className="btn btn-success">Publisher URL</a>
                <a href={source_url} className="btn btn-warning ml-3" target="_blank" rel="noopener noreferrer">Recipe URL</a>
              </div>
              <div className="ingredientsList">
                <h6 className="text-uppercase">Ingredients</h6>
                  <ul>
                    {ingredients.map((item,index) => {
                      return (
                        <li key={index}>{item}</li>
                      );
                    })}
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    )
  }
}