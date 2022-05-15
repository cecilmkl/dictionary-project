import React from "react";

export default function Phonetic(props) {
	if (props.phonetic) {
		return (
			<span className="Phonetic">
				<p>
					{props.phonetic.text}
					<a href={props.phonetic.audio} target="_blank" rel="noreferrer">
						Listen
					</a>
				</p>
			</span>
		);
	} else {
		return null;
	}
}
