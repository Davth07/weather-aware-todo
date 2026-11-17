import "./App.css";
import { useState, useEffect } from "react";
import type { Todo, Weather } from "./types/models";
import TodoList from "./components/todoList";
import WeatherDashboard from "./components/weatherDashboard";
import { getWeather } from "./services/weatherAPI";
import { getRecommendation, getWeatherCategory } from "./utils/weatherRules";
import WeatherRecommendation from "./components/weatherRecommendation";

function App() {
	const [todos] = useState<Todo[]>([
		{
			id: 1,
			userId: 1,
			title: "example",
			completed: false,
		},
		{
			id: 2,
			userId: 1,
			title: "example 2..",
			completed: true,
			weatherSensitive: true,
		},
		{
			id: 3,
			userId: 1,
			title: "example threeeeee",
			completed: false,
			weatherSensitive: true,
		},
	]);
	const [weather, setWeather] = useState<Weather | null>(null);
	useEffect(() => {
		async function loadWeather() {
			try {
				const weatherData = await getWeather("Stockholm");
				setWeather(weatherData);
			} catch (error) {
				console.error("Could not load weather:", error);
			}
		}
		loadWeather();
	}, []);
	const weatherCategory = weather ? getWeatherCategory(weather.code) : "";
	const isWindy = weather ? weather.windSpeed >= 25 : false;
	const recommendation = weather
		? getRecommendation(weatherCategory, isWindy)
		: "";
	return (
		<>
			<main>
				<h1>Weather Todo List</h1>

				{weather && <WeatherDashboard weather={weather} />}
				{weather && <WeatherRecommendation message={recommendation} />}

				<TodoList todos={todos} />
			</main>
		</>
	);
}

export default App;
