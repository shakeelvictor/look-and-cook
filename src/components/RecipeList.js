import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RecipeItem from './RecipeItem';

class RecipeList extends Component {
  render() {
    return (
      <section className="recipe-list">
        {
          this.props.favoriteRecipes.length > 0 ?
            <h4 className="link"><Link to='/favorites'>Favorites</Link></h4>
          :
            <div></div>
        }
        {
          this.props.recipes.map((recipe, index) => {
            return (
              <RecipeItem
                key={index}
                recipe={recipe}
                favoriteButton={true}
              />
            )
          })
        }
      </section>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(RecipeList);
