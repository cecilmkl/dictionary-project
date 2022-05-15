import React from "react";
import "./Photos.css";

export default function Photos(props) {
	if (props.photos) {
		console.log(props.photos);
		return (
			<div className="Photos row mt-3">
				{props.photos.map(function (photo, index) {
					return (
						<div className="col-6" key={index}>
							<a href={photo.src.original} target="_blank" rel="noreferrer">
								<img
									src={photo.src.tiny}
									alt={photo.alt}
									className="img-fluid"
								/>
							</a>
						</div>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}
