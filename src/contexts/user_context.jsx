import { createContext, useContext, useReducer } from "react";
import { user_reducer as reducer } from "../reducers/user_reducer";

const userContext = createContext();

const useUserContext = () => {
	return useContext(userContext);
};

const initialState = {
	name: "",
};

const UserContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<userContext.Provider value={{ ...state }}>{children}</userContext.Provider>
	);
};

export { useUserContext, UserContextProvider };
