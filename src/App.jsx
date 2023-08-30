import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import CreateTask from "./features/task/add_task/CreateTask";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "/create-task",
		element: <CreateTask />,
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
