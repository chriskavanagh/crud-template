import React, { useState } from "react";

export default function AddEditForm() {
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
    <div>
      <h1>Add Or Edit</h1>
    </div>
  );
}
