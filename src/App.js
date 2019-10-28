import React, { Component } from "react";
import ScoreCard from "./components/ScoreCard";
import Nav from "./components/Nav";
import IconCard from "./components/IconCard";

class App extends Component {
	state = { score: 0, topScore: 0 };

	handleBtnClick = e => {
		console.log("this is:", this);
	};

	render() {
		return (
			<div>
				<Nav>
					<ScoreCard score={this.state.score} topScore={this.state.topScore} />
				</Nav>
				<IconCard id="1" onClick={() => this.handleBtnClick()} />
			</div>
		);
	}
}

export default App;
