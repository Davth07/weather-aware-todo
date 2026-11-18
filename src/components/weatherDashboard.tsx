import type { Weather } from "../types/models";

type WeatherDashboardProps = {
	weather: Weather;
};

export default function WeatherDashboard({ weather }: WeatherDashboardProps) {
	return (
		<section id="weatherStuff">
			<div id="weatherCity">
				<h2>Current Weather in {weather.city}</h2>
			</div>
			<div id="allWeather">
				<div id="mainWeather">
					<img src={weather.icon} alt={weather.condition} />
					<h3>{weather.temperature}°C</h3>
				</div>
				<hr />
				<div id="weatherDetails">
					<p>Feels like: {weather.feelsLike}°C</p>
					<p>Condition: {weather.condition}</p>
					<p>Wind speed: {weather.windSpeed} km/h</p>
					<p>Precipitation: {weather.precipitation} mm</p>
				</div>
				<hr />
			</div>
		</section>
	);
}
