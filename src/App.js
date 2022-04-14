import logo from './logo.svg';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/home';
import DetailBeer from './pages/detailBeer';

function App() {

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					{/* <Route path="/detail/:id" element={<beerDetail />}></Route> */}
					<Route path="/" element={<Home />}></Route>
					<Route path="/detail/:id" element={<DetailBeer />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
