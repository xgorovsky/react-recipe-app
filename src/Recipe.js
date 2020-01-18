import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, img, ingredients, health }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <img className={style.image} src={img} alt="Recipe illustration" />
      <p
        style={{
          color: "#4a4e5f",
          textAlign: "left",
          padding: "10px",
          width: "80%"
        }}
      >
        Health labels: {health.join(", ")}
      </p>
      <ol>
        {" "}
        Ingredients:
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p className={style.lastElem}>
        Calories: <strong>{Math.round(calories)}</strong> kcal
      </p>
    </div>
  );
};

export default Recipe;
