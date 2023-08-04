import { useState } from "react";
import "./style.scss";
import Header from "./components/Hearder/Header";
import Hero from "./components/Hero/Hero";

const App = () => {
	const [apiCall, setApiCall] = useState(false);
	return (
		<main>
			<Header ApiCall={setApiCall} apiCall={apiCall} />
			<Hero ApiCall={setApiCall} apiCall={apiCall}></Hero>
		</main>
	);
};

export default App;
