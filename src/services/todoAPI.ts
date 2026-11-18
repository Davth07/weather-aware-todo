import type { Todo } from "../types/models";

export async function getTodos(): Promise<Todo[]> {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos");

	if (!response.ok) {
		throw new Error("Could not fetch users");
	}
	const data = await response.json();
	return data;
}
