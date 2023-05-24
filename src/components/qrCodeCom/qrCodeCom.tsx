import React from "react";
import Text from "../text/text";
import QrCode from "../qrCode/qr-code";
import style from "./style.module.css";
import Hr from "../hr/hr";
import LinkButton from "../linkButton/linkButton";
export default function QrCodeCom() {
	return (
		<div
			className={
				style.main +
				" flex flex-col items-center font-MontserratRegular w-fit m-auto  "
			}
		>
			<div className="mt-[58px]">
				<Text text="Join Channel" className="font-semibold text-20"></Text>
			</div>
			<div className="mt-[78px]">
				<Text
					className="font-medium text-25 w-[314px] text-center"
					text="Scan the Qr code for Joining"
				></Text>
			</div>
			<div className="mt-[67px] mx-[58px]">
				<QrCode></QrCode>
			</div>
			<div className="mt-[48px]">
				<Text
					className="text-14 text-center w-[326px]  "
					text="The QR code will be automatically detected
								when you position it between the guide lines"
				></Text>
			</div>
			<div className="mt-[42px] flex flex-row">
				<Hr></Hr>
			</div>
			<div className="mt-[52px] mb-[74px]">
				<LinkButton></LinkButton>
			</div>
		</div>
	);
}
