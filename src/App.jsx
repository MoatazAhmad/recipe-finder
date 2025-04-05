import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import SearchResults from "./components/SearchResults.jsx";
import Container from "./components/Container.jsx";
import { useState } from "react";
function App() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  const handleSearchByName = (value) => {
    searchByDishName(value);
  };

  const handleSearchByIngredient = (value) => {
    searchByIngredients(value);
  };

  const searchByDishName = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(
          searchQuery
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

  const searchByIngredients = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodeURIComponent(
          searchQuery
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
    <>
      <Container className="container-main">
        <Header />
        <SearchBar
          onSearchByName={handleSearchByName}
          onSearchByIngredient={handleSearchByIngredient}
        />
        <SearchResults recipes={recipes} />
      </Container>
    </>
  );
}

export default App;
