
import React, { useEffect, useState } from "react";
import { getUser } from "../services/userService";
import { useParams } from "react-router-dom";

function UserView() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getUser(id).then(res => setUser(res.data));
  }, [id]);

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Mobile: {user.mobile}</p>
    </div>
  );
}

export default UserView;
