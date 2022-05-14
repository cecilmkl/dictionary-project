import "./App.css";
import Dictionary from "./Dictionary";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div>Place a logo or something here</div>
			</header>
			<main>
				<h1>Dictionary app</h1>
				<Dictionary defaultKeyword="sunset" />
			</main>
			<footer>
				This project was coded by{" "}
				<a
					href="https://xenodochial-morse-ecd400.netlify.app/about.html"
					target="_blank"
					rel="noreferrer"
				>
					Cecilie K.
				</a>{" "}
				and is{" "}
				<a
					href="https://github.com/cecilmkl/dictionary-project"
					target="_blank"
					rel="noreferrer"
				>
					open-sourced on GitHub
				</a>{" "}
				and{" "}
				<a
					href="https://vermillion-meerkat-bc7d22.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					hosted on Netlify.
				</a>
			</footer>
		</div>
	);
}

export default App;
