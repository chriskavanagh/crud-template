import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /* useEffect(() => {
    Axios.get("http://localhost:3001/crud")
      .then(response => setItems(response.data))
      .catch(err => console.log(err));
  }, []); */

  useEffect(() => {
    async function getItems() {
      setIsError(false);
      setIsLoading(true);
      try {
        const { data } = await Axios.get("http://localhost:3001/crud");
        setItems(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    getItems();
    // setTimeout(getItems, 8000);
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <ul>
            {items.map((item, idx) => (
              <li key={idx}>{item.first}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
