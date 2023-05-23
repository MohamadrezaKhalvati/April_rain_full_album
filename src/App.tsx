import { useState } from "react";
import "./App.css";
import Text from "./components/text/text";
import QrCode from "./components/qrCode/qr-code";

function App() {
	return (
		<div>
			<div>
				<Text
					className="text-red-400"
					text="Created With Love And Respect"
				></Text>
			</div>
			<div>
				<QrCode key={"hello"}></QrCode>
			</div>
		</div>
	);
}

export default App;
