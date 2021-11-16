import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/HeaderStyles/style.css";
import "./styles/HomePageStyles/style.css";
import "./styles/CarouselStyles/style.css";
import "./styles/ControlsVideoStyles/style.css";
import "./bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
