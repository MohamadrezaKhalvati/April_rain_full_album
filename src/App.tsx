import "./App.css";
import QrCode from "./components/qrCode/qr-code";
import Text from "./components/text/text";

function App() {
	return (
		<div>
			<div className="mt-[100px]">
				<Text className="" text="Created With Love And Respect"></Text>
			</div>
			<div className="mt-[160px]">
				<QrCode></QrCode>
			</div>
		</div>
	);
}

export default App;
