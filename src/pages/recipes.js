import React from 'react';
import RecipesList from '../components/recipe/recipes';
// import {dataList} from '../data/recipesList';
export default class Recipes extends React.Component{
  constructor(props){
    super(props);
    this.getRecipes = this.getRecipes.bind(this);
    this.state = {
      data: {},
      search:'',
      recive:false,
      url:`https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
      base_url:`https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
      query:'&q=',
      error:''
    }
  }

  async getRecipes(){
    try{
      const response = await fetch(this.state.url);
      const jsonData = await response.json();
      console.log(jsonData.recipes);
      if(jsonData.recipes.length === 0){
        this.setState({
          error: "sorry but your search did not return any recipes, please try agagin or press serach icon for the most popular recipes"
        })
      } else {
        this.setState({
          data:jsonData.recipes,
          recive:true,
          error:''
        })
      }
      
    } catch(error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();  
  }

  handleChange = (e) => {
    this.setState({
      search:e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {base_url,query,search} = this.state;
    this.setState({
      url:`${base_url}${query}${search}`,
      search:'',
      recive:true,
    },()=>this.getRecipes());
  }

  render(){
    const {recive} = this.state;
    return (
      <>
      {recive ? (<RecipesList recipes={this.state.data} search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} error={this.state.error} />) : (<div><h2>Data Loading...</h2></div>)}
        
      </>
    )
  }
}