import React from "react";

export default function Text(props: any) {
	return (
		<div className={props.className}>
			<span>{props.text}</span>
		</div>
	);
}
