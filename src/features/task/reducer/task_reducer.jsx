import {
	ADD_TASK_TO_LIST,
	SET_TASK_FROM_INPUT,
	UPDATE_CATEGORY_AMOUNT,
} from "../add_task/action";

export const task_reducer = (state, action) => {
	if (action.type === SET_TASK_FROM_INPUT) {
		const { name, value } = action.payload;
		const task = { ...state.task, [name]: value };
		return { ...state, task };
	}
	if (action.type === ADD_TASK_TO_LIST) {
		const randomId = crypto.randomUUID();
		const task = { ...state.task, id: randomId };
		const list = [...state.list, task];
		return {
			...state,
			list,
			task: { id: "", taskName: "", description: "", category: "development" },
		};
	}
	if (action.type === UPDATE_CATEGORY_AMOUNT) {
		const categories = state.categories.map((category) => {
			const tasksAssigned = state.list.filter((task) => {
				return task.category === category.categoryName;
			}).length;
			return { ...category, tasksAssigned };
		});
		return { ...state, categories };
	}
	return { ...state };
};
