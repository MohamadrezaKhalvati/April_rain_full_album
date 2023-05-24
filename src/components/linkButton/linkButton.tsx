import React from "react";
import style from "./style.module.css";
export default function LinkButton() {
	const address: string = import.meta.env.VITE_TELEGRAM_ADDRESS;
	return (
		<div>
			<a
				href={address}
				className={
					style.buttonBackground +
					" px-6 py-3  no-underline rounded hover:underline text-whiteTextColor text-15 "
				}
			>
				Clck Here
			</a>
		</div>
	);
}
