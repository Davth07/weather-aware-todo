import type { Todo } from "../types/models";
import TodoItem from "./todoItem";

type TodoListProps = {
	todos: Todo[];
};

export default function TodoList({ todos }: TodoListProps) {
	return (
		<section>
			{todos.length === 0 ? (
				<p>No tasks found.</p>
			) : (
				todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
			)}
		</section>
	);
}
