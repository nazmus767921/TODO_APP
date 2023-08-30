import { createContext, useContext, useReducer } from "react";
import { task_reducer as reducer } from "../reducer/task_reducer";
import { SET_TASK_FROM_INPUT } from "../add_task/action";

const taskContext = createContext();

const useTaskContext = () => {
	return useContext(taskContext);
};

const initialState = {
	task: {
		taskName: "",
		description: "",
	},
	list: [],
};

const TaskContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	//=> DISPATCHES <==//
	const handle_input = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		dispatch({ type: SET_TASK_FROM_INPUT, payload: { name, value } });
	};
	return (
		<taskContext.Provider value={{ ...state, handle_input }}>
			{children}
		</taskContext.Provider>
	);
};

export { useTaskContext, TaskContextProvider };
