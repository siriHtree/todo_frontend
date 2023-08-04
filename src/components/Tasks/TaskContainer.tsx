import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import "./task.scss";
import { getTasks } from "../../api/services";
import CircularProgress from "@mui/material/CircularProgress";
const TaskContainer = (props: any) => {
	let [loading, setLoading] = useState(false);
	let [tasks, setTasks] = useState([]);
	let [error, setError] = useState("");
	useEffect(() => {
		getTasks(setLoading, setTasks, setError);
	}, [props.apiCall]);
	return (
		<div id="taskContainer">
			{loading ? (
				<CircularProgress />
			) : (
				tasks.map((elm) => {
					return <TaskCard data={elm} key={elm["_id"]} />;
				})
			)}
		</div>
	);
};

export default TaskContainer;
