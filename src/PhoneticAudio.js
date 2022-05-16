import React from "react";
import "./PhoneticAudio.css";

export default function PhoneticAudio(props) {
	function playSound() {
		const audio = document.getElementById("audio");
		audio.load();
		audio.play();
	}

	if (props.audio) {
		return (
			<span className="PhoneticAudio">
				<audio id="audio">
					<source src={props.audio} type="audio/mp3" />
				</audio>
				<button
					onClick={playSound}
					className="btn btn-outline-dark align-middle text-decoration-none text-dark"
				>
					<i className="bi bi-volume-up-fill"></i>
				</button>
			</span>
		);
	} else {
		return null;
	}
}
