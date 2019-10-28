import React from "react";
import "./style.css";

function ScoreCard(props) {
	return (
		<div className="ScoreCardContainer">
			<ul>
				<li>
					<strong>Score:</strong> {props.score}
				</li>
				<li>
					<strong>Top Score:</strong> {props.topScore}
				</li>
			</ul>
		</div>
	);
}

export default ScoreCard;
