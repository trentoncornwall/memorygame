import React, { Component } from "react";
import ScoreCard from "./components/ScoreCard";
import Nav from "./components/Nav";
import IconCard from "./components/IconCard";
import Pokemon from "./cardData/pokemon.json";

class App extends Component {
	state = { score: 0, topScore: 0 };

	handleBtnClick = e => {
		this.setState({ score: this.state.score + 1 });
	};

	render() {
		return (
			<div>
				<Nav>
					<ScoreCard score={this.state.score} topScore={this.state.topScore} />
				</Nav>
				<IconCard
					id={Pokemon[0].id}
					name={Pokemon[0].name}
					onClick={() => this.handleBtnClick()}
					img={Pokemon[0].image}
				/>
			</div>
		);
	}
}

export default App;
