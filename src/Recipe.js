import React, { useState, useRef } from "react";
import { fadeRight, fadeLeft, goDown, goUp } from './Animations';

const Recipe = ({ title, calories, img, ingredients, health }) => {

  const [isVisible, setIsVisible] = useState(false);

  let recipeDetails = useRef(null);

  const onClick = e => {
    e.preventDefault();
    setIsVisible(!isVisible);
    window.innerWidth < 800 ? !isVisible ? goDown(recipeDetails) : goUp(recipeDetails) : !isVisible ? fadeRight(recipeDetails) : fadeLeft(recipeDetails);
  };

  return (
    <article className="recipe">
      <div onClick={onClick} className="recipe-hero">
        <h2>{title}</h2>
        <figure className="recipe-image-wrapper">
          <img src={img} alt="Recipe illustration" />
        </figure>
      </div>
      <div ref={ref => (recipeDetails = ref)} className="recipe-details">
        <div className="details-inner">
          <span className="health-labels">
            <h3>Health labels:</h3>
            <span>{health.join(", ")}</span>
          </span>
          <ul className="recipe-ingredients">
            {" "}
            <h3>Ingredients:</h3>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.text}</li>
            ))}
          </ul>
          <span className="recipe-calories">
            Calories: <strong>{Math.round(calories)}</strong> kcal
          </span>{" "}
        </div>
      </div>
    </article>
  );
};

export default Recipe;
