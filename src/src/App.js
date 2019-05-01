import React, { Component } from 'react'
import { recipes } from "./tempList";
import './App.css';
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails"

 class App extends Component {
  state = {
    recipes: recipes,
    url: "https://www.food2fork.com/api/search?key=b70d69df7c05178830dc125bea206013",
    details_id: 35375
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
    const jsonData = await data.json(); // Grabbing all json data
    this.setState({ recipes: jsonData.recipes }); // this.setState will always go with brackets
    } catch (error){
      console.log(error)
    }
  }


  // When component mounted we will want to execute data fetching right away
  componentDidMount() {
    this.getRecipes()
  }

  displayPage = (index) => {
    switch(index) {
      default: 
      case 1: 
        return (< RecipeList recipes={this.state.recipes} />)
      case 0:
      return (< RecipeDetails id={this.state.details_id} />)
    }
  }

  render() {
    // console.log(this.state.recipes);
    return (
      <React.Fragment>
     {this.displayPage()}
      </React.Fragment>
    )
  }
}

export default App;

// QUESTIONS WE REALLY SHOULD ASK OURSELVES 
// 1 - When are we gonna try and fetch all these datas from the API -  when users click the button ? 