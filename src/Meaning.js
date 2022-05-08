import React from "react";

export default function Meaning(props) {
	return (
		<div className="Meaning">
			<h4>{props.meaning.partOfSpeech}</h4>
			<ol>
				{props.meaning.definitions.map(function (definition, index) {
					return (
						<div key={index}>
							<li>
								<p>
									{definition.definition}
									<br />
									<em>{definition.example}</em>
								</p>
							</li>
						</div>
					);
				})}
			</ol>
		</div>
	);
}
