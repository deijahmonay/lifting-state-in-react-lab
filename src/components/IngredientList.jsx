// src/components/IngredientList.jsx

import { availableIngredients } from "../App";

const IngredientList = ( props ) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => (
        <li
          key={index}
          style={{ backgroundColor: ingredient.color }}
        >
          {ingredient.name}
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
