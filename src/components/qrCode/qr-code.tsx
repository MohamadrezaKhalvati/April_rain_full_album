import React from "react";

export default function QrCode() {
	const address = import.meta.env.VITE_TELEGRAM_ADDRESS;
	console.log(address);
	return (
		<div>
			<span>asd</span>
			{/* <QRCode value="asd"></QRCode> */}
		</div>
	);
}
