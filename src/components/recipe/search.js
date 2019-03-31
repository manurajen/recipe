import React, { Component } from 'react';

export default class SearchCom extends Component {
  render(){
    const { search, handleChange, handleSubmit } = this.props;
    return (
      <div className="container search">
        <h1 className="mb-3">Search Recipes with Food2fork</h1>
        <div className="searchBox">
          <input type="text" placeholder="Search keyword" name="search" value={search} onChange={handleChange} />
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Search</button>
        </div>
      </div>
    )
  }
}