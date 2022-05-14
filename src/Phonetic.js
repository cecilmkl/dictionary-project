import React from "react";

export default function Phonetic(props) {
	if (props.phonetic) {
		return (
			<div className="Phonetic">
				<h3>{props.phonetic.text}</h3>
				<a href={props.phonetic.audio} target="_blank" rel="noreferrer">
					Listen
				</a>
			</div>
		);
	} else {
		return null;
	}
}
