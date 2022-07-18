import React from "react";
import "./App.css";
import FetchWeather from "../FetchWeather/FetchWeather";

function App() {
	return (
		<div className="App">
			<h1 className="heading">🐼 Paddy Panda's Weather Pocketbook 🐼</h1>
			<FetchWeather></FetchWeather>
			<img className="panda-image" src="./panda.png" /> Hi I'm Paddy!
		</div>
	);
}

export default App;
