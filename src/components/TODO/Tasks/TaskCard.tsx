import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

const TaskCard = (Props: any) => {
	let { data } = Props;
	return (
		<div className="taskCard">
			<h1>{data.taskName}</h1>
			<p>{data.taskDescription}</p>
			<div className="tAction">
				<div className="editBtn">
					<MdModeEditOutline />
				</div>
				<div className="editBtn">
					<AiFillDelete />
				</div>
			</div>
		</div>
	);
};

export default TaskCard;
