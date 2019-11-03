import React from "react";
import "./style.css";

function Header(props) {
	return (
		<div className="header">
			<div className="pageName">
				<h1>Pokémon Memory Game</h1>
			</div>
			<div className="info">Try and select each Pokémon once!</div>
		</div>
	);
}

export default Header;
