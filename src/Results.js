import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
	console.log(props.results);
	if (props.results) {
		return (
			<div className="Results">
				<div className="row">
					<div className="col-8">
						<h2 className="text-capitalize">{props.results.word}</h2>

						{props.results.phonetics.map(function (phonetic, index) {
							return (
								<div key={index}>
									<Phonetic phonetic={phonetic} />
								</div>
							);
						})}
						{props.results.meanings.map(function (meaning, index) {
							return (
								<div key={index}>
									<Meaning meaning={meaning} />
								</div>
							);
						})}
					</div>
					<div className="col-4">{/* Display photos here later */}</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
}
