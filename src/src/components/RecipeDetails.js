import React, { Component } from 'react';
import { recipe } from "../tempDetails";

export default class RecipeDetails extends Component {
//     constructor(props) {
//         super(props)

//         this.state =  {
//             recipe:recipe,
//             url:  `https://www.food2fork.com/api/get?key=b70d69df7c05178830dc125bea206013&rId=${this.props.id} `
//         }
//     }

// async componentDidMount () {
//     try {
//     const data = await fetch(this.state.url);
//     const jsonData = await data.json(); // Grabbing all json data
//     this.setState({ recipe: jsonData.recipe }); // this.setState will always go with brackets
//     } catch (error){
//       console.log(error)
//     }
// }    

state = {
    recipe: recipe
}

async componentDidMount() {
      const id = this.props.id;
      const url = `https://www.food2fork.com/api/get?key=b70d69df7c05178830dc125bea206013&rId=${id}`;
      try {
             const data = await fetch(url);
             const jsonData = await data.json(); // Grabbing all json data
             this.setState(
                 (state, props) => {
                    return { recipe: jsonData.recipe }
                 },() => {}
                ); // this.setState will always go with brackets - Its like 
             } catch (error) {
               console.log(error)
             }
}
 
  render() {
      const { image_url, publisher, publisher_url, source_url, title, ingredients } = this.state.recipe

    return (
      <React.Fragment> 
      <div className="cointainer">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
                <button type="button" className="btn btn-warning mb-5 text-capitalize">
                back to recipe list
                </button>
                    <img src={image_url} className="d-block w-100" alt="recipe"/>

                    <div className="col-10 mx-auto col-md-6 my-3">
                    <h6  className="text-uppercas">{title}</h6>
                    <h6  className="text-warning text-capitalize text-slanted"> provide by {publisher}</h6>
                    <a href={publisher_url} target="blank" rel="noopener noreferrer" className="btn btn-primary mt-2 text-capitalize"> publisher webpage</a>
                    <a href={publisher_url} target="blank" rel="noopener noreferrer" className="btn btn-success mx-3 mt-2 text-capitalize"> recipe url</a>
                    <ul className="list-group mt-4">
                    <h2 className="mt-3 mb-4"> Ingredients</h2>
                    {ingredients.map((item, index) => {
                        return (
                            <li key={index} className="list-group-item text-slanted">{item}</li>
                        )
                    })}
                    </ul>
                    </div>
            </div>
         </div>
    </div>
      
      </React.Fragment>
    )
  }
}
