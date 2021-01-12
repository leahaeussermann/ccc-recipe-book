import React from 'react'
import style from './recipe.module.css'

/* ############################ */
/* ##### Single baby name ##### */
/* ############################ */

export default ({
                    info
                }) => (
    <div className={style.recipe}>
        <h1>{info.recipe.label}</h1>
        <img src={info.recipe.image} alt=""/>
        <ol className={style.list}>
            {info.recipe.ingredientLines.map((ingredient, index) => (
                <li key={index}>
                    {ingredient}
                </li>
            ))}
        </ol>
        <h4>Kochanleitung</h4>
        <p>{info.recipe.instruction}</p>
    </div>
)
