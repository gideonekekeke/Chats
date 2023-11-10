import "./App.css";

import { RouterProvider } from "react-router-dom";
import Index from "./routes/AllRoutes";

function App() {
	return (
		<>
			<div>With PWA</div>
			<RouterProvider router={Index} />
		</>
	);
}

export default App;
