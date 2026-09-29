import { useState, useEffect } from "react";

function App() {
  const [Recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes))
      .catch((error) => alert("Error fetching recipes: " + error));
  }, []);

  return (
    <div className="container">
      <h2>Recipes</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>prepTimeMinutes</th>
            <th>CookTimeMinutes</th>
            <th>Servings</th>
            <th>Difficulty</th>
            <th>Cuisine</th>
            <th>Calories Per Serving</th>
          </tr>
        </thead>

        <tbody>
          {Recipes.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.ingredients.join(", ")}</td>
              <td>{row.instructions}</td>
              <td>{row.prepTimeMinutes}</td>
              <td>{row.cookTimeMinutes}</td>
              <td>{row.servings}</td>
              <td>{row.difficulty}</td>
              <td>{row.cuisine}</td>
              <td>{row.caloriesPerServing}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          
  );
}

export default App;