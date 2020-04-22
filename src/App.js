import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {
  const APP_ID = '41b3685d';
  const APP_KEY = '20008d0851e42543ad8e17d9a233c8fc';

  const [counter, setCounter] = useState(0);
  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const exampleReq =
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const resposne = await fetch(exampleReq);
    const data = await resposne.json();
    setRecipies(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input placeholder="Ice cream,beef ..." className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" >Search</button>
      </form>
      {/* <h1 onClick={() => setCounter(counter + 1)}>
        {counter}</h1> */}
      <div className="recipes">
        {recipies.map(recipe => (
          <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories}
            image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
