import React from 'react';
import style from './recipes.module.css'

const Recipes = ({title, calories, image, ingredients}) => {
    return (
     <div className={style.recipe}>
        <h1>{title}</h1>
          <ul className={style.ulstyle}>
           {ingredients.map(ingredients => (
              <li>{ingredients.text}</li>
           ))}
         </ul>
        <p>{calories}</p>
       <img className={style.image} src={image} alt=""/>
    </div>
    );
};

export default Recipes;