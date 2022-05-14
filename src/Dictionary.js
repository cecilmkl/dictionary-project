import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.defaultKeyword);
	let [results, setResults] = useState(null);
	let [loaded, setLoaded] = useState(false);

	function handleResponse(response) {
		setResults(response.data[0]);
	}

	function search(event) {
		// documentation: https://dictionaryapi.dev/
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleKeywordChange(event) {
		event.preventDefault();
		setKeyword(event.target.value); // will store value of form when something is changed!
	}

	function load() {
		// only first time the page is rendered
		setLoaded(true);
		search();
	}
	if (loaded) {
		return (
			<div className="Dictionary">
				<form onSubmit={handleSubmit}>
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
	} else {
		load();
		return "Loading...";
	}
}
