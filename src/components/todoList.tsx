import type { Todo, Weather } from "../types/models";
import TodoItem from "./todoItem";

type TodoListProps = {
	todos: Todo[];
	weather: Weather | null;
};

export default function TodoList({ todos, weather }: TodoListProps) {
	return (
		<section>
			{todos.length === 0 ? (
				<p>No tasks found.</p>
			) : (
				todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} weather={weather} />
				))
			)}
		</section>
	);
}
