import React from "react";
import "./hero.scss";
import TaskContainer from "../Tasks/TaskContainer";

const Hero = (props: any) => {
	return (
		<section id="hero">
			<div id="htxt">
				<h1>TO DO APP</h1>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<TaskContainer apiCall={props.apiCall}></TaskContainer>
		</section>
	);
};

export default Hero;
