import './App.css';
import React, {useEffect, useState} from "react";
import Recipe from './Recipe';
import { recipesList } from './data';

const App = () => {

    const [search, setSearch] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');


    useEffect(() => {
        setRecipes(recipesList.hits);
    }, [query]);

    const updateSearch = e => {
      setSearch(e.target.value);
    };

    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
    };

    return(
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
            <div className="recipes">
                {recipes.map(recipe => (
                    <Recipe
                        key = {recipe.recipe.label}
                        title = {recipe.recipe.label}
                        calories = {recipe.recipe.calories}
                        image = {recipe.recipe.image}
                        ingredients = {recipe.recipe.ingredientLines}/>
                ))}
            </div>
        </div>
    )
}

export default App;
