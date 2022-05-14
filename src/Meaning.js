import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
	return (
		<div className="Meaning">
			<h4>{props.meaning.partOfSpeech}</h4>
			<Synonyms synonyms={props.meaning.synonyms} />
			<ol>
				{props.meaning.definitions.map(function (definition, index) {
					return (
						<div key={index}>
							<li>
								<p>
									{definition.definition}
									<br />
									<em>{definition.example}</em>
									{/* <Synonyms synonyms={definition.synonyms} /> */}
								</p>
							</li>
						</div>
					);
				})}
			</ol>
		</div>
	);
}
