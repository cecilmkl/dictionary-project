import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
	// function search(){
	// 		let pexelApiKey =
	// 		"563492ad6f91700001000001566268bef93846b69cb0333d2bc6f6b0";
	// 	let pexelApiUrl = `https://api.pexels.com/v1/search?query=${props.results.word}&per_page=1`;

	// }

	if (props.results) {
		return (
			<div className="Results">
				<h2>{props.results.word}</h2>
				{props.results.phonetics.map(function (phonetic, index) {
					return (
						<span key={index}>
							<Phonetic phonetic={phonetic} />
						</span>
					);
				})}

				{props.results.meanings.map(function (meaning, index) {
					return (
						<div key={index}>
							<section>
								<Meaning meaning={meaning} />
							</section>
						</div>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}
