import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
	let [keyword, setKeyword] = useState(null);
	let [results, setResults] = useState(null);

	function handleResponse(response) {
		console.log(response.data[0]);
		//console.log(response.data[0].meanings[0].definitions[0].definition);
		setResults(response.data[0]);
	}

	function search(event) {
		event.preventDefault();

		// documentation: https://dictionaryapi.dev/
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
			<Results results={results} />
		</div>
	);
}
