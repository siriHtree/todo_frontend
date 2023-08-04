import * as api from "./axiosCall";
import React from "react";
export const addTaskCall = async (data: Object) => {
	try {
		let res = await api.addTask(data);
	} catch (err) {
		console.log(err);
	}
};

export const getTasks = async (
	setLoading: React.Dispatch<React.SetStateAction<boolean>>,
	setTasks: React.Dispatch<React.SetStateAction<never[]>>,
	setError: React.Dispatch<React.SetStateAction<string>>,
) => {
	try {
		setLoading(true);
		let res = await api.fetchTasks();
		setLoading(false);
		setTasks(res.data.data);
	} catch (err) {
		setLoading(false);
		setError("Something went wrong");
	}
};
