import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import WebLayout from "../components/layout/WebLayout";

const Index = createBrowserRouter([
	{
		path: "/",
        element : <WebLayout  />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);

export default Index;
