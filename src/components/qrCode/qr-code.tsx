import React from "react";
import QRCode from "react-qr-code";

export default function QrCode() {
	const address: string = import.meta.env.VITE_TELEGRAM_ADDRESS;
	return (
		<div className="">
			<div className="m-[4px] ">
				<QRCode value={address} bgColor="#27374D" fgColor="#FFFFFFFF"></QRCode>
			</div>
		</div>
	);
}
