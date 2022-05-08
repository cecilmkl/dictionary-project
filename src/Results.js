import React from "react";
import "./Results.css";

export default function Results(props) {
	return <div className="Results">Searched for {props.results.word}</div>;
}
