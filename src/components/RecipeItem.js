import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoriteRecipe } from '../actions';
import FontAwesome from 'react-fontawesome';
import thumbnail from '../assets/images/food.png';

class RecipeItem extends Component {
  constructor() {
    super();

    this.state = {
      favorited: false
    }
  }

  favorite(recipe) {
    this.props.favoriteRecipe(recipe);
    this.setState({favorited: true});
  }

  render() {
    const { recipe } = this.props;

    return (
      <a
        className="link"
        href={recipe.href}
        target="_blank">
        <article className="recipe-item">
          {
            this.props.favoriteButton ?
              this.state.favorited ?
                <FontAwesome
                  className="star"
                  name="star"
                  size="2x"
                  spin/>
              :
                <FontAwesome
                  className="star"
                  name="star"
                  size="2x"
                  spin
                  onClick={() => this.favorite(recipe)} />
            :
              <div></div>
          }
          <div className="recipe-text">
            <h4>{recipe.title}</h4>
            <p>
              <span>Main ingredients: </span>
                {recipe.ingredients}
            </p>
          </div>
          <img
            src={recipe.thumbnail ? recipe.thumbnail : thumbnail}
            alt={recipe.title}
            className="recipe-img"
          />
      </article>
    </a>
    )
  }
}

export default connect(null, { favoriteRecipe })(RecipeItem);
