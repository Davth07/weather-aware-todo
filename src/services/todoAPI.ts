import type { Todo } from "../types/models";

const taskTitles = [
	"Buy groceries",
	"Walk the dog",
	"Finish project report",
	"Call mom",
	"Clean the house",
	"Pay bills",
	"Read a book",
	"Watch a movie",
	"Call a friend",
	"Go for a walk",
	"Cook dinner",
	"Attend meeting",
	"Write a blog post",
	"Exercise",
	"Plan a trip",
	"Organize files",
	"Do laundry",
	"Water the plants",
	"Take out the trash",
	"Study for an exam",
];

const taskCategories: Todo["category"][] = [
	"outdoor", // groceries
	"outdoor", // walk dog
	"indoor", // finish project report
	"indoor", // call mom
	"indoor", // clean house
	"indoor", // pay bills
	"indoor", // read bookk
	"indoor", // watch movie
	"indoor", // call friend
	"outdoor", // go for walk
	"indoor", // cook dinner
	"unspecified", // attend meeting
	"indoor", // write blog post
	"unspecified", // exercise
	"indoor", // plan trip
	"indoor", // organize files
	"indoor", // do laundry
	"indoor", // water plants
	"outdoor", // take out trash
	"indoor", // study for exam
];

export async function getTodos(): Promise<Todo[]> {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos");

	if (!response.ok) {
		throw new Error("Could not fetch users");
	}

	const data: Todo[] = await response.json();

	return data.map((todo) => {
		const index = (todo.id - 1) % taskTitles.length;

		return {
			...todo,
			title: taskTitles[index],
			category: taskCategories[index],
		};
	});
}
