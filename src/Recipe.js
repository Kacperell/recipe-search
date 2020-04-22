import React from 'react';
import style from './recipe.module.css';

export default function Recipe({ title, calories, image, ingredients }) {
    return (
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <img className={style.image} src={image} alt={title} />
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            {/* <h5>{calories}</h5> */}
        </div>
    )
}
