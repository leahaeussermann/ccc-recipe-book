import React from 'react';
import style from './recipe.module.css'


const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt=""/>
            <ol>
                {ingredients.map((ingredient, index) => (
                    <li key = {index}>
                        {ingredient}
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe;