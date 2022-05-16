import React from "react";
import Meaning from "./Meaning";
import PhoneticAudio from "./PhoneticAudio";
import Photos from "./Photos";
import "./Results.css";

export default function Results(props) {
	if (props.results) {
		return (
			<div className="Results">
				<div className="d-inline-flex align-items-center ">
					<PhoneticAudio audio={props.results.phonetics[0].audio} />
					<h2>{props.results.word}</h2>
				</div>

				<div className="phonetic-text">{props.results.phonetics[0].text}</div>
				<div className="row limit-height">
					<div className="col-8">
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
					<div className="col-4">
						<Photos photos={props.photos} />
					</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
}
