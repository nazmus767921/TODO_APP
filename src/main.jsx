import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TaskContextProvider } from "./contexts/task_context.jsx";
import { UserContextProvider } from "./contexts/user_context.jsx";
import { FilterContextProvider } from "./features/filter/context/filter_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<UserContextProvider>
			<FilterContextProvider>
				<TaskContextProvider>
					<App />
				</TaskContextProvider>
			</FilterContextProvider>
		</UserContextProvider>
	</React.StrictMode>
);
