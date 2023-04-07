import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom"

// components
import Careers from "./components/Careers"

// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Faq from "./pages/Faq"
import ContactUs from "./pages/ContactUs"
import NotFound from "./pages/NotFound"
import CareerDetail from "./pages/CareerDetail"
import CareerError from "./pages/CareerError"

// layouts
import RootLayout from "./layouts/RootLayout"
import HelpLayout from "./layouts/HelpLayout"
import CareersLayout from "./layouts/CareersLayout"

// utilities
import getCareers from "./utils/getCareers"
import careerLoader from "./utils/careerLoader"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />

			<Route path="help" element={<HelpLayout />}>
				<Route path="faq" element={<Faq />} />
				<Route path="contact" element={<ContactUs />} />
			</Route>

			<Route
				path="careers"
				element={<CareersLayout />}
				errorElement={<CareerError />}
			>
				<Route index element={<Careers />} loader={getCareers} />
				<Route path=":id" element={<CareerDetail />} loader={careerLoader} />
			</Route>

			<Route path="*" element={<NotFound />} />
		</Route>
	)
)

function App() {
	return <RouterProvider router={router} />
}

export default App
