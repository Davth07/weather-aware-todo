import type { Todo, Weather } from "../types/models";
import TodoItem from "./todoItem";

type TodoListProps = {
	todos: Todo[];
	weather: Weather | null;
	onToggleTodo: (todoId: number) => void;
};

export default function TodoList({
	todos,
	weather,
	onToggleTodo,
}: TodoListProps) {
	return (
		<section>
			{todos.length === 0 ? (
				<p>No tasks found.</p>
			) : (
				todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						weather={weather}
						onToggleTodo={onToggleTodo}
					/>
				))
			)}
		</section>
	);
}
