import { useState } from "react";

function Header({ title }) {
	return <h1>{title ? title : 'Default title'}</h1>
}

export default function HomePage() {
	const [likes, setLikes] = useState(0);
	const names = ['Leonardo', 'José', 'Oliveira', 'Santos'];

	function handleClick() {
		setLikes(likes + 1);
	}

	return (
		<div>
			<Header title="Develop. Preview. Ship. 🚀" />

			<ul>
				{
					names.map((name) => (
						<li key={name}>{name}</li>
					))
				}
			</ul>

			<button onClick={handleClick}>Like ({likes})</button>
		</div>
	)
}
