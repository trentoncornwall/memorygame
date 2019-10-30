import React, { Component } from "react";
import ScoreCard from "./components/ScoreCard";
import Nav from "./components/Nav";
import IconCard from "./components/IconCard";
import Pokemon from "./cardData/pokemon.json";

class App extends Component {
  state = { score: 0, topScore: 0, clicked: [], pmon: [] };

  // checks to see if it's been clicked yet and adjust state
  handleBtnClick = id => {
    this.state.clicked.includes(id)
      ? this.alreadyClicked(id)
      : this.newlyClicked(id);
  };

  newlyClicked = id => {
    console.log("NewlyClicked being called with", id);

    this.setState({
      score: this.state.score + 1,
      clicked: [...this.state.clicked, id]
    });

    this.shufflePokemon();
  };

  alreadyClicked = id => {
    console.log("already clicked", id, this.state.clicked);
  };

  shufflePokemon = () => {
    let newPokemon = [...Pokemon];
    for (let i = newPokemon.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newPokemon[i], newPokemon[j]] = [newPokemon[j], newPokemon[i]];
    }
    this.setState({
      pmon: newPokemon
    });
  };
  componentDidMount() {
    this.shufflePokemon();
  }

  render() {
    return (
      <div>
        {/* Render's score */}
        <Nav>
          <ScoreCard score={this.state.score} topScore={this.state.topScore} />
        </Nav>
        {/* Creates the Icons */}
        {this.state.pmon.map(pokemon => (
          <IconCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            onClick={() => this.handleBtnClick(pokemon.id)}
            img={pokemon.image}
          />
        ))}
      </div>
    );
  }
}

export default App;
