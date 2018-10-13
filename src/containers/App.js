import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import MonstersList from "../components/MonstersList";
import { setSearchField, requestMonsters } from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.onRequestMonsters();
  }

  render() {
    const { searchField, onSearchChange, monsters, isPending } = this.props;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="tc">
        <Header handleChange={onSearchChange} />
        <MonstersList monsters={filteredMonsters} isPending={isPending} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchMonsters.searchField,
    monsters: state.requestMonsters.monsters,
    isPending: state.requestMonsters.isPending,
    error: state.requestMonsters.error
  };
};

const mapDispatchProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestMonsters: () => requestMonsters(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchProps
)(App);
