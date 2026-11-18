import type { Todo } from "../types/models";

type TodoItemProps = {
	todo: Todo;
};

export default function TodoItem({ todo }: TodoItemProps) {
	return (
		<div id="todoItem">
			<h3>{todo.title}</h3>

			<p>{todo.completed ? "Completed" : "Not completed"}</p>
		</div>
	);
}
