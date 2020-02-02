import React, { useState, useEffect } from "react";
import AddEditForm from "./components/AddEditForm";
import Axios from "axios";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /* useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    Axios.get("http://localhost:3001/crud")
      .then(response => setItems(response.data))
      .then(setIsLoading(false))
      .catch(err => setIsError(true));
  }, []); */

  const addItemState = item => {
    setItems([...items, item]);
  };

  const updateState = item => {
    console.log(item);
    const newArr = items.map(obj =>
      obj.id === item.id ? { ...obj, ...item } : obj
    );
    setItems(newArr);
  };

  const deleteItemFromState = id => {
    const updatedItems = this.state.items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  useEffect(() => {
    async function getItems() {
      setIsError(false);
      setIsLoading(true);
      try {
        const { data } = await Axios.get("http://localhost:3001/crud");
        console.log(data);
        setItems(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    getItems();
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
              <>
                <li key={idx}>{item.first}</li>
                <button onClick={() => updateState(item)}>Update</button>
              </>
            ))}
          </ul>
        </div>
      )}
      <AddEditForm />
    </div>
  );
}

export default App;
