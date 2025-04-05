import { useState } from "react";

function SearchBar({ onSearchByName, onSearchByIngredient }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value); // Simplified the function
  };

  const handleSearch = (searchFunction) => {
    if (input.trim() !== "") {
      searchFunction(input);
    } else {
      alert("Please enter a recipe name or ingredients.");
    }
  };

  return (
    <section className="search-section">
      <form
        className="search-form"
        onSubmit={(e) => e.preventDefault()} // Prevent form submission
      >
        <input
          type="text"
          placeholder="Enter ingredient or recipe name..."
          value={input}
          onChange={handleChange}
        />
        <button type="button" onClick={() => handleSearch(onSearchByName)}>
          Search by recipe name
        </button>
        <button
          type="button"
          onClick={() => handleSearch(onSearchByIngredient)}
        >
          Search by ingredients
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
