import TaskCard from "./TaskCard";
import "./task.scss";

const TaskContainer = () => {
	return (
		<div id="taskContainer">
			{[1, 2, 3, 4, 5].map((elm) => (
				<TaskCard />
			))}
		</div>
	);
};

export default TaskContainer;
