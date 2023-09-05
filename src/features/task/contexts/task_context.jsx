import { createContext, useContext, useEffect, useReducer } from "react";
import { task_reducer as reducer } from "../reducer/task_reducer";
import {
	ADD_TASK_TO_LIST,
	SET_TASK_FROM_INPUT,
	UPDATE_CATEGORY_AMOUNT,
} from "../add_task/action";

const taskContext = createContext();

const useTaskContext = () => {
	return useContext(taskContext);
};

const initialState = {
	categories: [
		{
			id: "1",
			categoryName: "development",
			tasksAssigned: 10,
		},
		{
			id: "2",
			categoryName: "design",
			tasksAssigned: 5,
		},
	],
	task: {
		id: "",
		taskName: "",
		description: "",
		category: "development",
	},
	list: [],
};

const TaskContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	//=> DISPATCHES <==//
	const handle_input = (e) => {
		let name = e.target.name;
		let value = e.target.value;

		dispatch({ type: SET_TASK_FROM_INPUT, payload: { name, value } });
	};

	const add_task = () => {
		dispatch({ type: ADD_TASK_TO_LIST });
	};

	//=> USE EFFECTS <==//
	useEffect(() => {
		dispatch({ type: UPDATE_CATEGORY_AMOUNT });
	}, [state.list]);

	return (
		<taskContext.Provider value={{ ...state, handle_input, add_task }}>
			{children}
		</taskContext.Provider>
	);
};

export { useTaskContext, TaskContextProvider };
