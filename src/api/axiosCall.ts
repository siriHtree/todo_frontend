import axios from "axios";
const instance = axios.create({
	baseURL: "http://localhost:4000/",
});

export const addTask = (data: Object) =>
	instance.post("/api/v1/tasks/add", data);
export const fetchTasks = () => instance.get("/api/v1/tasks/list");
