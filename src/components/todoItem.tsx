import type { Todo, Weather } from "../types/models";
import { getTaskRecommendation } from "../utils/weatherRules";
import WeatherRecommendation from "./weatherRecommendation";

type TodoItemProps = {
	todo: Todo;
	weather: Weather | null;
};

export default function TodoItem({ todo, weather }: TodoItemProps) {
	const recommendation = getTaskRecommendation(todo.category, weather);
	return (
		<div id="todoItem">
			<h3>{todo.title}</h3>

			<WeatherRecommendation message={recommendation} />

			<p>{todo.completed ? "Completed" : "Not completed"}</p>
		</div>
	);
}
