
import React, { useState, useEffect } from "react";
import { createUser, getUser, updateUser } from "../services/userService";
import { useNavigate, useParams } from "react-router-dom";

function UserForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: ""
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getUser(id).then(res => setForm(res.data));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) await updateUser(id, form);
    else await createUser(form);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="First Name" required
        value={form.firstName}
        onChange={(e) => setForm({...form, firstName:e.target.value})}
      />
      <input placeholder="Last Name" required
        value={form.lastName}
        onChange={(e) => setForm({...form, lastName:e.target.value})}
      />
      <input placeholder="Email" type="email" required
        value={form.email}
        onChange={(e) => setForm({...form, email:e.target.value})}
      />
      <input placeholder="Mobile" required
        value={form.mobile}
        onChange={(e) => setForm({...form, mobile:e.target.value})}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
