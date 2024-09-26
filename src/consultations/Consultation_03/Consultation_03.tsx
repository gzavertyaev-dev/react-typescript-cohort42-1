import { useState } from "react";
import { v4 } from "uuid";
import Button from "components/Button/Button";

import "./styles.css";

// ПРИМЕР РАБОТЫ С ДЕКСТРУКТУРИЗАЦИЕЙ МАССИВОВ
// const animals = ["Dog", "Cat", "Pig", "Lion"];
// const dog = animals[0];
// const cat = animals[1];
// const pig = animals[2];
// const lion = animals[3];

// const [dog, cat, ...rest] = animals;
// console.log(dog);
// console.log(cat);
// console.log(rest); // ["Pig", "Lion"]
// const [pig, lion] = rest;
// console.log(pig);
// console.log(lion);

interface Ingredient {
  id: string;
  value: string;
}

function Consultation_03() {
  // Подробный пример работы useState
  //   const [count, setCount] = useState(0);
  //   let count2 = 0;

  //   const onAdd = () => {
  //     setCount((prevValue: number) => {
  //       return prevValue + 1;
  //     });
  //   };

  //   const onAdd2 = () => {
  //     count2 = count2 + 1;
  //     console.log("count from  let indidefunction onAdd2", count2);
  //   };

  //   console.log("Update");
  //   console.log("count from state", count);
  //   console.log("count from  let", count2);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const ingredientButtonNames: string[] = [
    "Burger",
    "Fries",
    "Cola",
    "Salad",
    "Ketchup",
    "Ice-cream",
  ];

  const ingredientButtons = ingredientButtonNames.map((ingredient) => {
    const id: string = v4();

    const addIngredient = () => {
      setIngredients((prevValue: Ingredient[]) => {
        return [...prevValue, { id: id, value: ingredient }];
      });
    };

    return (
      <div key={id} className="ingredient-button-control">
        <Button name={ingredient} onClick={addIngredient} />
      </div>
    );
  });

  const orderList = ingredients.map((ingredientObj: Ingredient) => {
    const deletIngredient = () => {
      setIngredients((prevValue: Ingredient[]) => {
        return [...prevValue].filter((item: Ingredient) => {
          return item.id !== ingredientObj.id;
        });
      });
    };

    return (
      <li
        onClick={deletIngredient}
        key={ingredientObj.id}
        className="ingredient"
      >
        {ingredientObj.value}
      </li>
    );
  });

  return (
    <div className="consultation03-wrapper">
      {/* <Button name="Add state" onClick={onAdd} />
      <Button name="Add simple let" onClick={onAdd2} /> */}
      <div className="ingredient-buttons-container">{ingredientButtons}</div>
      <div className="ingredients-container">
        <p className="ingredients-title">Your order</p>
        <ol>{orderList}</ol>
      </div>
    </div>
  );
}

export default Consultation_03;
