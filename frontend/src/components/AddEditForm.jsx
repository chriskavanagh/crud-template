import React, { useState } from "react";
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
  return (
    <Form>
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
