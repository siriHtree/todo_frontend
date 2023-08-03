import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

const TaskCard = () => {
	return (
		<div className="taskCard">
			<h1>Task Name</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Voluptatum, doloribus quas sapiente impedit excepturi voluptate
				doloremque officia commodi, eum, aliquid repellendus! Nobis
				dolores eveniet a nam neque? Alias, eum aliquam?
			</p>
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
