export type User = {
	id: number;
	name: string;
	email: string;
};

export type Todo = {
	id: number;
	userId: number;
	title: string;
	completed: boolean;
	category: "indoor" | "outdoor" | "unspecified";
};

export type Weather = {
	city: string;
	temperature: number;
	feelsLike: number;
	condition: string;
	code: number;
	icon: string;
	windSpeed: number;
	precipitation: number;
};
