import { useState } from "react";
import "./style.scss";
import Starting from "./components/REDUX_LEARN/Starting";


const App = () => {
	const [apiCall, setApiCall] = useState(false);
	return (
		<main>
			<Starting></Starting>
		</main>
	);
};

export default App;
