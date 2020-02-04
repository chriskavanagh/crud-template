import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function AddEditForm(props) {
  const [form, setForm] = useState({
    id: 0,
    first: "",
    last: "",
    email: "",
    phone: "",
    location: "",
    hobby: ""
  });

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submitFormAdd = async e => {
    e.preventDefault();
    const { first, last, email, phone, location, hobby } = form;
    let employee = JSON.stringify({
      first: first,
      last: last,
      email: email,
      phone: phone,
      location: location,
      hobby: hobby
    });
    try {
      const { data } = await axios.post(
        "http://localhost:3001/crud",
        employee,
        {
          headers: { "Content-Type": "application/json" }
        }
      );
      // create newEmployee with pk/id retruned from Postgres, "data[0]id"
      const newEmployee = {
        id: data[0].id,
        first: first,
        last: last,
        email: email,
        phone: phone,
        location: location,
        hobby: hobby
      };
      // add newEmployee to state
      props.addItemToState(newEmployee);
    } catch (e) {
      console.log(e);
    }
  };

  const submitFormEdit = e => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={props.item ? submitFormEdit : submitFormAdd}>
      <FormGroup>
        <Label for="first">First Name</Label>
        <Input
          type="text"
          name="first"
          id="first"
          onChange={onChange}
          value={form.first === null ? "" : form.first}
        />
      </FormGroup>
      <FormGroup>
        <Label for="last">Last Name</Label>
        <Input
          type="text"
          name="last"
          id="last"
          onChange={onChange}
          value={form.last === null ? "" : form.last}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          onChange={onChange}
          value={form.email === null ? "" : form.email}
        />
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone</Label>
        <Input
          type="text"
          name="phone"
          id="phone"
          onChange={onChange}
          value={form.phone === null ? "" : form.phone}
          placeholder="ex. 555-555-5555"
        />
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input
          type="text"
          name="location"
          id="location"
          onChange={onChange}
          value={form.location === null ? "" : form.location}
          placeholder="City, State"
        />
      </FormGroup>
      <FormGroup>
        <Label for="hobby">Hobby</Label>
        <Input
          type="text"
          name="hobby"
          id="hobby"
          onChange={onChange}
          value={form.hobby}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}
