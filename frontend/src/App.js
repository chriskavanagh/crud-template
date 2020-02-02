import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import DataTable from "./components/DataTable";
import Axios from "axios";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  /* const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false); */

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
      try {
        const { data } = await Axios.get("http://localhost:3001/crud");
        console.log(data);
        setItems(data);
      } catch (error) {}
    }
    getItems();
  }, []);

  return (
    <Container className="App">
      <Row>
        <Col>
          <h1 style={{ margin: "20px 0" }}>CRUD Database</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <DataTable
            items={items}
            updateState={updateState}
            deleteItemFromState={deleteItemFromState}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
