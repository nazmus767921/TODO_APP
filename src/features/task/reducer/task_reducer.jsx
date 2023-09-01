import { SET_TASK_FROM_INPUT } from "../add_task/action";

export const task_reducer = (state, action) => {
	if (action.type === SET_TASK_FROM_INPUT) {
		const { name, value } = action.payload;
		const task = { ...state.task, [name]: value };
		return { ...state, task };
	}
	return { ...state };
};
