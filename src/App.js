import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = '42de26c3';
  const APP_KEY = 'a67c6e9d1baa2f7256c07221d82dbf03';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')

  /* getRecipes out of useEffect if re-used
  
  useEffect(() => {
    getRecipes();
  }, [query]);*/

  /*const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };*/

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    }
    getRecipes();
  }, [query])

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <div className="header-wrapper">
        <div className="onlyHome">
          <img src={require('./arabica-2.png')} alt="funny-graphic" />
        </div>
        <h1>Find your favourite meal recipe<span className="red-extra">!</span></h1>
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            onChange={updateSearch}
            value={search}
            placeholder='What dish are you looking for?'
          />
          <button className="search-button"  type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            health={recipe.recipe.healthLabels}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
