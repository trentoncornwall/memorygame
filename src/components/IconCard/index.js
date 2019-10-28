import React from "react";
import "./style.css";

function IconCard(props) {
	return (
		<div onClick={props.onClick} className="IconCard">
			<div className="IconImage">
				<img src={props.img} alt={props.name} />
			</div>
		</div>
	);
}

export default IconCard;
