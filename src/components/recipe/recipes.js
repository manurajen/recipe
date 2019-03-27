import React, { Component } from 'react';
import RecipeList from './recipelist';
import Search from './search';

export default class myRecipes extends Component {
  render(){
    const { search, handleChange, handleSubmit, recipes, error} = this.props;
    return (
      <div>
        <Search search={search} handleChange={handleChange} handleSubmit={handleSubmit} />
        {error ? (<section>{error}</section>) : (<RecipeList recipes={recipes} />)}
        
      </div>
    )
  }
}