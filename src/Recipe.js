import React from "react";
import style from "./recipe.module.css"

const Recipe = ({name, image, ing}) => {
    return(
        <div className={style.recipe}>
            <h1>{name}</h1>
            <ul>
                {
                    ing.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))
                }
            </ul>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}

export default Recipe;
