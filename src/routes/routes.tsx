import { createBrowserRouter } from "react-router-dom";
import Main from "../screen/main/main";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <span>error</span>,
	},
]);

export default routes;
