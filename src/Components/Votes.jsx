import React, { Component } from 'react';
import { patchVotes } from '../api';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { HandThumbsDownFill, HandThumbsUpFill } from 'react-bootstrap-icons';

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
    patchVotes(id, increment, endpoint);
  };

  render() {
    const { id, votes, endpoint, mr, ml } = this.props;
    const { disableBtn } = this.state;
    return (
      <Container>
        <Row className='d-md-flex justify-content-center'>
          <div className={mr}>
            <button
              disabled={disableBtn}
              style={{ border: 0, background: 'transparent' }}
              onClick={() => {
                this.updateVotes(id, 1, endpoint);
              }}>
              <HandThumbsUpFill />
            </button>
          </div>
          <div>
            {' '}
            <span>{votes + this.state.updateVotes}</span>
          </div>
          <div className={ml}>
            <button
              disabled={disableBtn}
              style={{ border: 0, background: 'transparent' }}
              onClick={() => {
                this.updateVotes(id, -1, endpoint);
              }}>
              <HandThumbsDownFill />
            </button>
          </div>
        </Row>
      </Container>
    );
  }
}
