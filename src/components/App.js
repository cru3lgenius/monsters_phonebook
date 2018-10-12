import React, { Component } from "react";
import Header from "./Header";
import MonstersList from "./MonstersList";
class App extends Component {
  state = {
    monsters: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        this.setState({ monsters: data });
      });
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const filteredMonsters = this.state.monsters.filter(monster =>
      monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );

    return (
      <div className="tc">
        <Header handleChange={this.handleChange} />
        <MonstersList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
