import React, { Component } from "react";
import { patchVotes } from "../api";

export class Votes extends Component {
  state = {
    updateVotes: 0,
    disableBtn: false
  };

  updateVotes = (id, increment, endpoint) => {
    this.setState((currentState) => {
      return {
        updateVotes: currentState.updateVotes + increment,
        disableBtn: true
      };
    });
    patchVotes(id, increment, endpoint );
  };

  render() {
    const { id, votes, endpoint} = this.props
    const {disableBtn} = this.state
    return (
      <section>
        <button
         disabled={disableBtn}
          onClick={() => {
            this.updateVotes(id, 1, endpoint);
          }}
        >
          +
        </button>
        <p> Votes: {votes + this.state.updateVotes}</p>
        <button
          disabled={disableBtn}
          onClick={() => {
            this.updateVotes(id, -1, endpoint)
          }}
        >
          -
        </button>
      </section>
    );
  }
}
