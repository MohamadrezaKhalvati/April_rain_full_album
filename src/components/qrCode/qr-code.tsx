import React from "react";
import QRCode from "react-qr-code";

export default function QrCode() {
	const address: string = import.meta.env.VITE_TELEGRAM_ADDRESS;
	return (
		<div>
			<QRCode value={address}></QRCode>
		</div>
	);
}
