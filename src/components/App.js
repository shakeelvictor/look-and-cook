import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';
import '../styles/styles.css';
import video from '../assets/video/food-prep.mp4';

class App extends Component {
  render() {
    return (
      <div>
        <div className="fullscreen-bg">
          <video loop muted autoPlay className="video">
              <source src={video} type="video/mp4" />
          </video>
        </div>
        <section className="intro">
          <header>
            <h1>~ Look & Cook ~</h1>
          </header>
          <div>
            <p>
              With <span>Look & Cook</span>, you are just a search away of finding new & delicious recipes!
              Either search by ingredients, or by a dish, or both, or just click "Find Recipes!"
              if you can't decide what to search for.
              It really is that simple!
              So go ahead - <em>Look it up & Cook it up!</em>
            </p>
          </div>
        </section>
        <div className="look-container">
          <SearchRecipes />
          <RecipeList />
        </div>
      </div>
    )
  }
}

export default App;
