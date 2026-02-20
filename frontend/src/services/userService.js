
import axios from "axios";

const API = "http://localhost:5000/api/users";

export const getUsers = (params) => axios.get(API, { params });
export const getUser = (id) => axios.get(`${API}/${id}`);
export const createUser = (data) => axios.post(API, data);
export const updateUser = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteUser = (id) => axios.delete(`${API}/${id}`);
export const exportCSV = () => window.open(`${API}/export`);
