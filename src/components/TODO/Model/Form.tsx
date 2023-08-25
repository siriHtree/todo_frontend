import { useState, FormEvent, ChangeEvent } from "react";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./form.scss";

import { addTaskCall } from "../../../api/services";
const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
};
const Form = (props: any) => {
	const [formData, setFormData] = useState({
		taskName: "",
		taskDescription: "",
	});
	// const handleOpen = () => props.setOpen(true);
	const handleClose = () => props.setOpen(false);
	const submitionHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
		addTaskCall(formData);
		props.setApiCall(!props.apiCall);
		handleClose();
	};
	const getData = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	return (
		<>
			<Modal open={props.open} onClose={handleClose}>
				<Box sx={style}>
					<form onSubmit={submitionHandler} id="form">
						<h3>{props.type} task</h3>

						<TextField
							label="Task Name"
							variant="outlined"
							name="taskName"
							onChange={getData}
							value={formData.taskName}
							margin="normal"
							required
						/>
						<TextField
							label="Task Description"
							variant="outlined"
							name="taskDescription"
							onChange={getData}
							value={formData.taskDescription}
							multiline
							maxRows={4}
							margin="normal"
							required
						/>
						<Button variant="contained" type="submit">
							Submit
						</Button>
					</form>
				</Box>
			</Modal>
		</>
	);
};

export default Form;
