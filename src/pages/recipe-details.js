import React from 'react';
import RecipeDetailsCom from '../components/recipe/recipe-details';

export default class RecipeDetails extends React.Component{
  constructor(props){
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      dataDetails: {},
      id,
      loading:true
    }
  }
  async componentDidMount() {
    const url = `https://www.food2fork.com/api/get?key=${process.env.REACT_APP_API_KEY}&rId=${this.state.id}`;
    try{
      const response = await fetch(url);
      const responseData = await response.json();
      this.setState({
        dataDetails: responseData.recipe,
        loading:false
      })
    }
    catch(error){
      console.log(error);
    }
  }
  render(){
    if(this.state.loading){
      return(
        <>
          <h2>Loading Recipe....</h2>
        </>
      )
    }
    return(
      <>
        <RecipeDetailsCom dataDetails={this.state.dataDetails} />
      </>
    )
    
  }
}