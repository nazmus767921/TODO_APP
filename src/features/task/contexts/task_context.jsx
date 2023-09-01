import { createContext, useContext, useReducer } from "react";
import { task_reducer as reducer } from "../reducer/task_reducer";
import { SET_SCHEDULE, SET_TASK_FROM_INPUT } from "../add_task/action";
import dayjs from "dayjs";

const taskContext = createContext();

const useTaskContext = () => {
	return useContext(taskContext);
};

const initialState = {
	task: {
		taskName: "",
		description: "",
		schedule: dayjs("2022-04-17"),
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

	const handle_date_input = (newValue) => {
		dispatch({ type: SET_SCHEDULE, payload: newValue });
	};

	return (
		<taskContext.Provider value={{ ...state, handle_input, handle_date_input }}>
			{children}
		</taskContext.Provider>
	);
};

export { useTaskContext, TaskContextProvider };
