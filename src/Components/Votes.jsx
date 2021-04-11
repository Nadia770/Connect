import React, { Component } from "react";
import { patchVotes } from "../api";

export class Votes extends Component {
  state = {
    updateVotes: 0,
  };

  updateVotes = (id, increment, endpoint) => {
    this.setState((currentState) => {
      return {
        updateVotes: currentState.updateVotes + increment,
      };
    });
    patchVotes(id, increment, endpoint );
  };

  render() {
    const { id, votes, endpoint} = this.props
    return (
      <section>
        <button
          onClick={() => {
            this.updateVotes(id, 1, endpoint);
          }}
        >
          +
        </button>
        <p> Votes: {votes + this.state.updateVotes}</p>
        <button
          onClick={() => {
            this.updateVotes(this.props.id, -1, this.props.endpoint)
          }}
        >
          -
        </button>
      </section>
    );
  }
}
