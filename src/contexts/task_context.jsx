import { createContext, useContext, useReducer } from "react";
import { task_reducer as reducer } from "../reducers/task_reducer";

const taskContext = createContext();

const useTaskContext = () => {
	return useContext(taskContext);
};

const initialState = {
	tasks: [],
};

const TaskContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<taskContext.Provider value={{ ...state }}>{children}</taskContext.Provider>
	);
};

export { useTaskContext, TaskContextProvider };
