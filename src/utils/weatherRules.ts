import type { Todo, Weather } from "../types/models";

export function getWeatherCategory(code: number): string {
	if (code === 1117) return "Snow Storm";
	if ([1087, 1273, 1276, 1279, 1282].includes(code)) return "Thunderstorm";
	if ([1195, 1246].includes(code)) return "Heavy Rain";
	if ([1030, 1135, 1147].includes(code)) return "Fog";
	if ([1180, 1183, 1240].includes(code)) return "Light Rain";
	if (
		[1063, 1150, 1153, 1168, 1171, 1186, 1189, 1192, 1198, 1201, 1243].includes(
			code,
		)
	)
		return "Rainy";
	if (
		[1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258].includes(code)
	)
		return "Snow";
	if ([1003, 1006, 1009].includes(code)) return "Cloudy";
	if (code === 1000) return "Sunny";
	return "Other";
}

export function getRecommendation(category: string, windy: boolean) {
	if (category === "Thunderstorm") return "Stay indoors if unsafe.";
	if (category === "Snow Storm") return "Avoid unenecessary travel.";
	if (category === "Heavy Rain" || category === "Rainy")
		return "Take an umbrella and check outdoor plans.";
	if (category === "Light Rain") return "Bring a light rain jacket.";
	if (category === "Snow") return "Wear warm clothes and suitable shoes.";
	if (category === "Fog") return "Take extra care when travelling.";
	if (windy) return "It is windy. Secure loose items.";
	if (category === "Sunny") return "Good conditions for an outdoor task.";
	return "Check the weather before going outside.";
}

export function getTaskRecommendation(
	category: Todo["category"],
	weather: Weather | null,
): string {
	if (category !== "outdoor") {
		return "No outdoor weather check needed.";
	}
	if (!weather) {
		return "Weather information unavailable.";
	}
	if (weather.precipitation > 0) {
		return "Rain detected: consider rescheduling";
	}
	return "Check conditions before your outdoor activity";
}
