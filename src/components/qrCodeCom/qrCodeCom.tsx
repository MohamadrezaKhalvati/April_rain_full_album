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
				" flex flex-col items-center font-MontserratRegular sm:w-auto lg:w-fit lg:m-auto   "
			}
		>
			<div className="mt-[28px]">
				<Text text="Join Channel" className="font-semibold text-20"></Text>
			</div>
			<div className="mt-[48px]">
				<Text
					className="font-medium text-25 w-[314px] text-center"
					text="Scan the Qr code for Joining"
				></Text>
			</div>
			<div className="mt-[37px] mx-[58px]">
				<QrCode></QrCode>
			</div>
			<div className="mt-[28px]">
				<Text
					className="text-14 text-center lg:w-[326px] sm : mx-[1px] "
					text="The QR code will be automatically detected
								when you position it between the guide lines"
				></Text>
			</div>
			<div className="mt-[12px] flex flex-row">
				<Hr></Hr>
			</div>
			<div className="mt-[22px] mb-[64px]">
				<LinkButton></LinkButton>
			</div>
		</div>
	);
}
