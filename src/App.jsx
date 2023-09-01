import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import CreateTask from "./features/task/add_task/CreateTask";
import TaskDetails from "./pages/TaskDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "/create-task",
		element: <CreateTask />,
	},
	{
		path: "/task/:id",
		element: <TaskDetails />,
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
