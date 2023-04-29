import "./index.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ModalState } from "./context/ModalContext";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<ModalState>
				<App />
			</ModalState>
		</React.StrictMode>
	</BrowserRouter>
);
