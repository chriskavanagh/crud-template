import React from "react";
import { Table, Button } from "reactstrap";
import ModalForm from "./ModalForm";

export default function DataTable(props) {
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
          <div style={{ width: "110px" }}>
            <ModalForm
              buttonLabel="Edit"
              item={item}
              updateState={props.updateState}
            />{" "}
            <Button color="danger" onClick={() => props.deleteItem(item.id)}>
              Del
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
