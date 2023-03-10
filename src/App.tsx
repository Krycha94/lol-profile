import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	AboutPage,
	ErrorPage,
	FreeRotationPage,
	HomePage,
	LeaderboardsPage,
	SummonerPage,
} from "./pages";
import Header from "./components/Header/Header";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/summoner/:region/:name" element={<SummonerPage />} />
				<Route path="/leaderboards" element={<LeaderboardsPage />} />
				<Route path="/free-rotation" element={<FreeRotationPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
}

export default App;
