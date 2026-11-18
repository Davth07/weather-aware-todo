import "./App.css";
import { useState, useEffect } from "react";
import type { Todo, Weather, User } from "./types/models";
import TodoList from "./components/todoList";
import WeatherDashboard from "./components/weatherDashboard";
import { getWeather } from "./services/weatherAPI";
import { getRecommendation, getWeatherCategory } from "./utils/weatherRules";
import WeatherRecommendation from "./components/weatherRecommendation";
import { getUsers } from "./services/userAPI";
import { getTodos } from "./services/todoAPI";
import UserSelector from "./components/userSelector";

function App() {
	const [weather, setWeather] = useState<Weather | null>(null);
	const [selectedCity, setSelectedCity] = useState("Stockholm");
	const [weatherLoading, setWeatherLoading] = useState(false);
	const [weatherError, setWeatherError] = useState("");

	const [users, setUsers] = useState<User[]>([]);
	const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
	const [dataLoading, setDataLoading] = useState(false);
	const [dataError, setDataError] = useState("");

	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		let active = true;

		async function loadWeather() {
			setWeatherLoading(true);
			setWeatherError("");

			try {
				const weatherData = await getWeather(selectedCity);
				if (active) {
					setWeather(weatherData);
				}
			} catch (error) {
				console.error("Could not load weather:", error);
				if (active) {
					setWeatherError("Could not load weather, please try again.");
				}
			} finally {
				if (active) {
					setWeatherLoading(false);
				}
			}
		}
		loadWeather();
		return () => {
			active = false;
		};
	}, [selectedCity]);

	useEffect(() => {
		let active = true;

		async function loadData() {
			setDataLoading(true);
			setDataError("");

			try {
				const [userData, todosData] = await Promise.all([
					getUsers(),
					getTodos(),
				]);

				if (active) {
					setUsers(userData);
					setTodos(todosData);
				}
			} catch (error) {
				console.error("Could not load users and todos:", error);

				if (active) {
					setDataError("Could not load users and todos");
				}
			} finally {
				if (active) {
					setDataLoading(false);
				}
			}
		}
		loadData();
		return () => {
			active = false;
		};
	}, []);
	const weatherCategory = weather ? getWeatherCategory(weather.code) : "";
	const isWindy = weather ? weather.windSpeed >= 25 : false;
	const recommendation = weather
		? getRecommendation(weatherCategory, isWindy)
		: "";

	const filteredTodos = todos.filter((todo) => todo.userId === selectedUserId);
	return (
		<>
			<main>
				<h1>Weather Todo List</h1>
				<section id="page">
					<div id="inputs">
						{dataLoading && <p>Loading users and tasks...</p>}

						{dataError && <p role="alert">{dataError}</p>}
						<UserSelector
							users={users}
							selectedUserId={selectedUserId}
							onUserChange={setSelectedUserId}
						/>

						<h2>Choose a city: </h2>
						<select
							id="city"
							value={selectedCity}
							onChange={(event) => setSelectedCity(event.target.value)}
						>
							<option value="Stockholm">Stockholm</option>
							<option value="Gothenburg">Göteborg</option>
							<option value="Malmö">Malmö</option>
						</select>
					</div>
					<div id="weather">
						{weatherLoading && <p>Loading weather...</p>}

						{weatherError && <p role="alert">{weatherError}</p>}

						{!weatherLoading && !weatherError && weather && (
							<WeatherDashboard weather={weather} />
						)}
						<div id="recommendation">
							{!weatherLoading && !weatherError && weather && (
								<WeatherRecommendation message={recommendation} />
							)}
						</div>
					</div>
				</section>
				<section id="tasks">
					<h2 id="tasks-heading">Tasks</h2>
					{selectedUserId === null ? (
						<p>Select a user to see their tasks.</p>
					) : (
						<TodoList todos={filteredTodos} />
					)}
				</section>
			</main>
		</>
	);
}

export default App;
