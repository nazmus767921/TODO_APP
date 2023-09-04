import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import CreateTask from "./features/task/add_task/CreateTask";
import TaskDetails from "./pages/Task_Details/TaskDetails";
import CategoryPage from "./pages/Category_Page/CategoryPage";

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
	{
		path: "/categories/:category",
		element: <CategoryPage />,
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
