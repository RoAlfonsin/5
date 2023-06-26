import React from "react";
import { useState } from "react";
import Task from "./task";

//create your first component
const Home = () => {
	const [listOfTasks, setListOfTasks] = (["a","b","c"]);

	function eraseTask(taskDescription){
		console.log(listOfTasks);
		let newListOfTasks = [];
		for (let task of listOfTasks){
			if (task != taskDescription){
				newListOfTasks.push(task);
				console.log(task);
			}
		}
		setListOfTasks(newListOfTasks);
	}

	function addTask(taskDescription){

	}

	window.addEventListener("click", (e) =>{
		let taskDescription = e.target.id;
		eraseTask(taskDescription);
	});

	return (
		<div className="text-center">
			<h1 className="text-center mt-5 fst-italic display-2">todos</h1>
			<div className="container">
				<Task description = "Test Task"/>
			</div>
		</div>
	);
};

export default Home;
