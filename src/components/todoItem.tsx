import type { Todo, Weather } from "../types/models";
import { getTaskRecommendation } from "../utils/weatherRules";
import WeatherRecommendation from "./weatherRecommendation";

type TodoItemProps = {
	todo: Todo;
	weather: Weather | null;
	onToggleTodo: (todoId: number) => void;
};

export default function TodoItem({
	todo,
	weather,
	onToggleTodo,
}: TodoItemProps) {
	const recommendation = getTaskRecommendation(todo.category, weather);
	return (
		<div id="todoItem">
			<h3>{todo.title}</h3>

			<WeatherRecommendation message={recommendation} />
			<label>
				<input
					type="checkbox"
					checked={todo.completed}
					onChange={() => onToggleTodo(todo.id)}
				/>
				Completed
			</label>
		</div>
	);
}
