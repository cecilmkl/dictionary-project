import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
	let [keyword, setKeyword] = useState(null);

	function handleResponse(response) {
		console.log(response.data[0]);
	}

	function search(event) {
		event.preventDefault();
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
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
