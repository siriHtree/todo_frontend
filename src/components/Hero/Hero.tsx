import React from "react";
import "./hero.scss";
import TaskContainer from "../Tasks/TaskContainer";

const Hero = () => {
	return (
		<section id="hero">
			<div id="htxt">
				<h1>TO DO APP</h1>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<TaskContainer></TaskContainer>
		</section>
	);
};

export default Hero;
