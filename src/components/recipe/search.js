import React, { Component } from 'react';

export default class SearchCom extends Component {
  render(){
    const { search, handleChange, handleSubmit } = this.props;
    return (
      <div>
        <h1>Search Recipes with Food2fork</h1>
        <form>
          <input type="text" placeholder="search keyword" name="search" value={search} onChange={handleChange} />
          <button type="button" onClick={handleSubmit}>Search</button>
        </form>
      </div>
    )
  }
}