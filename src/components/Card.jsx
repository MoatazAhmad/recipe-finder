function Card({ recipe, ...props }) {
  return (
    <>
      <div key={props.key} className="recipe-card">
        <img src={recipe.image} alt="Spaghetti Bolognese" />
        <div className="card-content">
          <p>{recipe.title}</p>
        </div>
      </div>
    </>
  );
}
export default Card;
