import { useState, useEffect } from "react";

function App() {
  const [Quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((response) => response.json())
      .then((data) => setQuotes(data.quotes))
      .catch((error) => alert("Error fetching quotes: " + error));
  }, []);

  return (
    <div className="container">
      <h2>Quotes</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Quote</th>
            <th>Author</th>
          </tr>
        </thead>

        <tbody>
          {Quotes.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.quote}</td>
              <td>{row.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;