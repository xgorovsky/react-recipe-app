import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Loader from "./Loader";
import "./App.scss";

const App = () => {
  const APP_ID = "42de26c3";
  const APP_KEY = "a67c6e9d1baa2f7256c07221d82dbf03";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRecipes = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setIsLoading(false);
      setRecipes(data.hits);
    };
    query !== ""
      ? getRecipes()
      : console.log("Welcome on meal finder console.");
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <header>
        <figure className="onlyHome">
          <img src={require("./arabica-2.png")} alt="chicken-logo" />
        </figure>
        <h1>
          Find your favourite meal recipe<span className="red-extra">!</span>
        </h1>
      </header>
      <main>
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            onChange={updateSearch}
            value={search}
            placeholder="What dish are you looking for?"
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </main>
      {isLoading ? (
        <Loader />
      ) : recipes.length !== 0 ? (
        <section className="recipes">
          {recipes.map((recipe, index) => (
            <Recipe
              key={index}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              img={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              health={recipe.recipe.healthLabels}
            />
          ))}
        </section>
      ) : null}
    </div>
  );
};

export default App;
