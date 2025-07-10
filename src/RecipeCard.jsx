export default function RecipeCard({ recipe }) {
    return (
      <div>
        <h2>{recipe.name}</h2>
        <ul>
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>{recipe.instructions}</p>
      </div>
    );
  }
  