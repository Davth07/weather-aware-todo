import type { Weather } from "../types/models";

export async function getWeather(city: string): Promise<Weather> {
	const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
	if (!apiKey) throw new Error("Missing API key");

	const url =
		"https://api.weatherapi.com/v1/current.json" +
		`?key=${encodeURIComponent(apiKey)}&q=${encodeURIComponent(city)}`;
	const response = await fetch(url);
	if (!response.ok) throw new Error("Weather request failed");

	const data = await response.json();
	return {
		city: data.location.name,
		temperature: data.current.temp_c,
		feelsLike: data.current.feelslike_c,
		condition: data.current.condition.text,
		code: data.current.condition.code,
		icon: `https:${data.current.condition.icon}`,
		windSpeed: data.current.wind_kph,
		precipitation: data.current.precip_mm,
	};
}
