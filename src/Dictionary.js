import React, { useState } from "react";

export default function Dictionary() {
	let [keyword, setKeyword] = useState(null);
	function search(event) {
		event.preventDefault();
		alert(`Searching for ${keyword}`);
	}

	function handleKeywordChange(event) {
		event.preventDefault();
		setKeyword(event.target.value); // will store value of form when something is changed!
	}
	return (
		<div className="Dictionary">
			<form onSubmit={search}>
				<input
					type="search"
					onChange={handleKeywordChange}
					autoFocus={true}
					placeholder="Search for a word"
				/>
				<i className="bi bi-search mx-2"></i>
			</form>
		</div>
	);
}
