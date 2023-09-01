import dayjs from "dayjs";
import { SET_SCHEDULE, SET_TASK_FROM_INPUT } from "../add_task/action";

export const task_reducer = (state, action) => {
	if (action.type === SET_TASK_FROM_INPUT) {
		const { name, value } = action.payload;
		const task = { ...state.task, [name]: value };
		return { ...state, task };
	}

	if (action.type === SET_SCHEDULE) {
		const newSchedule = dayjs(action.payload);
		const task = { ...state.task, schedule: newSchedule };
		return { ...state, task };
	}
	return { ...state };
};
