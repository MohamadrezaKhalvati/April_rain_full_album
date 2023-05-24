import QrCode from "../../components/qrCode/qr-code";
import Text from "../../components/text/text";
import style from "./style.module.css";
export default function Main() {
	return (
		<div
			className={
				style.main +
				" flex flex-col items-center font-MontserratRegular mt-[40px] "
			}
		>
			<div className="mt-[58px]">
				<Text text="Join Channel"></Text>
			</div>
			<div>
				<Text className="mt-[78px]" text="Scan the Qr code for Joining"></Text>
			</div>
			<div className="mt-[67px]">
				<QrCode></QrCode>
			</div>
			<div className="mt-[48px]">
				<Text
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
						" px-6 py-3  no-underline rounded hover:underline text-whiteTextColor "
					}
				>
					Clck Here
				</a>
			</div>
		</div>
	);
}
