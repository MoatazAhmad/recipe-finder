import { useEffect } from "react";
import Card from "./Card";
function SearchResults({ recipes }) {
  return (
    <>
      <section className="results">
        {recipes.map((recipe, index) => (
          <Card key={index} recipe={recipe} />
        ))}
      </section>
    </>
  );
}
export default SearchResults;
