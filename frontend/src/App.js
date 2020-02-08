import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Container, Row, Col } from "reactstrap";
import DataTable from "./components/DataTable";
import ModalForm from "./components/ModalForm";
import { CSVLink } from "react-csv";
import axios from "axios";
import "./App.css";

toast.configure();
function App() {
  const [items, setItems] = useState([]);
  /* const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false); */

  /* useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    axios.get("http://localhost:3001/crud")
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
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  useEffect(() => {
    async function getItems() {
      try {
        const { data } = await axios.get("http://localhost:3001/crud");
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
          <h1 style={{ margin: "50px 0" }}>React-Postgres CRUD Database</h1>
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

      <Row>
        <Col>
          <CSVLink
            filename={"db.csv"}
            color="primary"
            style={{ float: "left", marginRight: "10px" }}
            className="btn btn-primary"
            data={items}
          >
            Download CSV
          </CSVLink>
          <ModalForm buttonLabel="Add Item" addItemToState={addItemState} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
