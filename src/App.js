import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Replace this URL with your actual endpoint for the large dataset
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(apiUrl);
        setData(response.data); // Assuming the response is an array
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  if (loading) {
    return <h2>Loading data...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red" }}>Error: {error}</h2>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Large Data Fetch</h1>
      <ul>
        {data.map((item) => (
          // Adjust the property usage below according to your actual data shape
          <li key={item.id}>
            <strong>{item.title}</strong> - {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
