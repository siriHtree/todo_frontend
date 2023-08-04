import { useState } from "react";
import "./header.scss";
import Form from "../Model/Form";

const Header = (props: any) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<nav>
				<div id="logo">
					<h3>doitNow</h3>
				</div>
				<button onClick={() => setOpen(true)}>create task</button>
			</nav>
			<Form
				open={open}
				setOpen={setOpen}
				type={"Create"}
				setApiCall={props.ApiCall}
				apiCall={props.apiCall}
			/>
		</>
	);
};

export default Header;
