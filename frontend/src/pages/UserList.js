
import React, { useEffect, useState } from "react";
import { getUsers, deleteUser, exportCSV } from "../services/userService";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchUsers = async () => {
    const res = await getUsers({ search });
    setUsers(res.data.users);
  };

  useEffect(() => {
    fetchUsers();
  }, [search]);

  return (
    <div>
      <h2>User List</h2>
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Link to="/add">Add User</Link>
      <button onClick={exportCSV}>Export CSV</button>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.firstName} {u.lastName}</td>
              <td>{u.email}</td>
              <td>
                <Link to={`/view/${u._id}`}>View</Link> |
                <Link to={`/edit/${u._id}`}>Edit</Link> |
                <button onClick={() => deleteUser(u._id).then(fetchUsers)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
