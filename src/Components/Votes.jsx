import React, { Component } from "react";
import { patchVotes } from "../api";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { HandThumbsDownFill, HandThumbsUpFill } from "react-bootstrap-icons";

export class Votes extends Component {
  state = {
    updateVotes: 0,
    disableBtn: false,
  };

  updateVotes = (id, increment, endpoint) => {
    this.setState((currentState) => {
      return {
        updateVotes: currentState.updateVotes + increment,
        disableBtn: true,
      };
    });
    patchVotes(id, increment, endpoint);
  };

  render() {
    const { id, votes, endpoint } = this.props;
    const { disableBtn } = this.state;
    return (
      <Container>
        <Row>
          <Col  xs={12} md={4}>
            <button
              disabled={disableBtn}
              onClick={() => {
                this.updateVotes(id, 1, endpoint);
              }}
            >
              <HandThumbsUpFill />
            </button>
          </Col>
          <Col xs={12} md={4}>
            {" "}
            <span>{votes + this.state.updateVotes}</span>
          </Col>
          <Col xs={12} md={4}>
            <button
              disabled={disableBtn}
              onClick={() => {
                this.updateVotes(id, -1, endpoint);
              }}
            >
              <HandThumbsDownFill />
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}
