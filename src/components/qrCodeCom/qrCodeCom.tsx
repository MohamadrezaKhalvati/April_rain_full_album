import React from "react";
import Text from "../text/text";
import QrCode from "../qrCode/qr-code";
import style from "./style.module.css";
export default function QrCodeCom() {
	return (
		<div
			className={
				style.main + " flex flex-col items-center font-MontserratRegular  "
			}
		>
			<div className="mt-[58px]">
				<Text text="Join Channel" className="font-semibold text-20"></Text>
			</div>
			<div className="mt-[78px]">
				<Text
					className="font-medium text-25"
					text="Scan the Qr code for Joining"
				></Text>
			</div>
			<div className="mt-[67px]">
				<QrCode></QrCode>
			</div>
			<div className="mt-[48px] ">
				<Text
					className="font-semibold text-14 text-center"
					text="The QR code will be automatically detected
								when you position it between the guide lines"
				></Text>
			</div>
			<div className="mt-[42px] flex flex-row">
				<div className="w-[100px] border-t-[1px]  text-whiteTextColor text-center  mt-[10px] mr-[8px] "></div>
				<span>OR</span>
				<div className="w-[100px] border-t-[1px]  text-whiteTextColor text-center  mt-[10px] ml-[8px]"></div>
			</div>
			<div className="mt-[52px] mb-[74px]">
				<a
					href="#"
					className={
						style.buttonBackground +
						" px-6 py-3  no-underline rounded hover:underline text-whiteTextColor text-15 "
					}
				>
					Clck Here
				</a>
			</div>
		</div>
	);
}
