import type { User } from "../types/models";

export async function getUsers(): Promise<User[]> {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");

	if (!response.ok) {
		throw new Error("Could not fetch users");
	}
	const data = await response.json();
	return data;
}
