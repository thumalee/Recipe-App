import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from "./Recipe";

const App = () => {

  const APP_ID = "beaf5e5b";
  const APP_KEY = "8b798ad1e34951d3fd1366b10eaaac89";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
      getRecipes();
  }, [query]);

  const getRecipes = async () => {
      const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const content = await res.json();
      setRecipes(content.hits);
      console.log(content.hits);
  }

  const getSearch = event => {
      setSearch(event.target.value);
  }

  const clickSearch =  event => {
      event.preventDefault();
      setQuery(search);
      setSearch("");
  }

  return(
      <div className="App">
        <form className="form-search" onSubmit={clickSearch}>
          <input className="search-bar" type="text" value={search} onChange={getSearch}/>
          <button className="search" type="submit" >Search</button>
        </form>
          <div className="recipes">
          {recipes.map(recipe => (
              <Recipe
                  key={recipe.recipe.label}
                  name={recipe.recipe.label}
                  image={recipe.recipe.image}
                  ing={recipe.recipe.ingredients}
              />
          ))}
          </div>
      </div>
  )
}

export default App;
