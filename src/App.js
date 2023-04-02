import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
	return (
		<BrowserRouter>
			<main>
				<Routes>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path="about"
						element={<About />}
					/>
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
