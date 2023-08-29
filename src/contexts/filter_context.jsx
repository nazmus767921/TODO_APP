import { createContext, useContext, useReducer } from "react";
import { filter_reducer as reducer } from "../reducers/filter_reducer";

const filterContext = createContext();

const useFilterContext = () => {
	return useContext(filterContext);
};

const initialState = {
	filters: {},
};

const FilterContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<filterContext.Provider value={{ ...state }}>
			{children}
		</filterContext.Provider>
	);
};

export { useFilterContext, FilterContextProvider };
