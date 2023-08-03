import React from 'react'
import "./style.scss";
import Header from "./components/Hearder/Header";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
		<main>
			<Header />
			<Hero></Hero>
		</main>
  );
}

export default App