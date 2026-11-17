import type { User } from "../types/models";

type UserSelectorProps = {
	users: User[];
	selectedUserId: number | null;
	onUserChange: (userId: number | null) => void;
};

export default function UserSelector({
	users,
	selectedUserId,
	onUserChange,
}: UserSelectorProps) {
	return (
		<section>
			<h2>Select a user</h2>
			<select
				value={selectedUserId ?? ""}
				onChange={(event) =>
					onUserChange(
						event.target.value === "" ? null : Number(event.target.value),
					)
				}
			>
				<option value="">Choose a user</option>
				{users.map((user) => (
					<option key={user.id} value={user.id}>
						{user.name}
					</option>
				))}
			</select>
		</section>
	);
}
