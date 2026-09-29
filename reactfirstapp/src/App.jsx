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

      <div className="table-responsive">
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Ingredients</th>
              <th>Instructions</th>
              <th>Prep Time</th>
              <th>Cuisine</th>
              <th>Calories Per Serving</th>
            </tr>
          </thead>

          <tbody>
            {Recipes.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>

                <td>{row.name}</td>

                <td>
                  <ul>
                    {row.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </td>

                <td>
                  <ol>
                    {row.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                </td>

                <td>{row.prepTimeMinutes} min</td>

                <td>{row.cuisine}</td>

                <td>{row.caloriesPerServing} kcal</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;