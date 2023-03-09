import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	AboutPage,
	ErrorPage,
	FreeRotationPage,
	HomePage,
	LeaderboardsPage,
	SummonerPage,
} from "./pages";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/summoner" element={<SummonerPage />} />
				<Route path="/leaderboards" element={<LeaderboardsPage />} />
				<Route path="/free-rotation" element={<FreeRotationPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
}

export default App;
