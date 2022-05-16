import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.defaultKeyword);
	let [results, setResults] = useState(null);
	let [loaded, setLoaded] = useState(false);
	let [photos, setPhotos] = useState(null);

	function handleDictionaryResponse(response) {
		setResults(response.data[0]);
	}

	function handlePexelResponse(response) {
		setPhotos(response.data.photos);
	}

	function search(event) {
		// documentation: https://dictionaryapi.dev/
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleDictionaryResponse);

		let pexelApiKey =
			"563492ad6f91700001000001566268bef93846b69cb0333d2bc6f6b0";
		let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
		let headers = { Authorization: `Bearer ${pexelApiKey}` };
		axios.get(pexelApiUrl, { headers: headers }).then(handlePexelResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleKeywordChange(event) {
		event.preventDefault();
		setKeyword(event.target.value);
	}

	function load() {
		// only first time the page is rendered
		setLoaded(true);
		search();
	}
	if (loaded) {
		return (
			<div className="Dictionary container">
				<form onSubmit={handleSubmit}>
					<input
						type="search"
						onChange={handleKeywordChange}
						autoFocus={true}
						defaultValue={props.defaultKeyword}
					/>
					<i className="bi bi-search mx-2"></i>
				</form>
				<Results results={results} photos={photos} />
			</div>
		);
	} else {
		load();
		return "Loading...";
	}
}
