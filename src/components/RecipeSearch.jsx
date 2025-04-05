import React, { useState } from "react";

const RecipeSearch = () => {
  const [query, setQuery] = useState(""); // query is user input
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  const searchByDishName = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(
          query
        )}&number=10&apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`
      );
      const data = await response.json();
      setRecipes(data.results || []);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to fetch recipes.");
    }
  };

  const searchByIngredients = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodeURIComponent(
          query
        )}&number=10&apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`
      );
      const data = await response.json();
      setRecipes(data || []);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to fetch recipes.");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>🍽️ Recipe Finder</h2>
      <input
        type="text"
        placeholder="Enter dish or ingredients (comma separated)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={searchByDishName} style={{ marginRight: "1rem" }}>
          Search by Dish Name
        </button>
        <button onClick={searchByIngredients}>Search by Ingredients</button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {recipes.map((recipe) => (
          <li key={recipe.id} style={{ marginBottom: "1rem" }}>
            <p>
              <strong>{recipe.title}</strong>
            </p>
            {recipe.image && (
              <img src={recipe.image} alt={recipe.title} width="100" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeSearch;
