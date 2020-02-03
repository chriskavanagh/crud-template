import React, { useEffect } from "react";
import { Table, Button } from "reactstrap";
import ModalForm from "./ModalForm";
import axios from "axios";

export default function DataTable(props) {
  const deleteItem = async id => {
    let confirmDelete = window.confirm("Delete item forever?");

    if (confirmDelete) {
      try {
        await axios.delete("http://localhost:3001/crud", {
          data: { id: JSON.stringify(id) }
        });
      } catch (e) {
        console.log(e);
      }
      props.deleteItemFromState(id);
    }
  };

  const items = props.items.map(item => {
    return (
      <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>{item.first}</td>
        <td>{item.last}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.location}</td>
        <td>{item.hobby}</td>
        <td>
          <div style={{ width: "135px" }}>
            <ModalForm
              buttonLabel="Edit"
              item={item}
              updateState={props.updateState}
            />{" "}
            <Button color="danger" onClick={() => deleteItem(item.id)}>
              Delete
            </Button>
          </div>
        </td>
      </tr>
    );
  });
  return (
    <Table responsive hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>First</th>
          <th>Last</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Location</th>
          <th>Hobby</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{items}</tbody>
    </Table>
  );
}
