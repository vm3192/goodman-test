import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body {
		background: #13234d;
		font-family: Roboto, sans-serif;
	}
`

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<React.StrictMode>
		<Global />
		<App />
	</React.StrictMode>,
);
