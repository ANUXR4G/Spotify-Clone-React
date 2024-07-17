import React, { Component } from 'react';
import Pause1 from './pause';
import Play1 from './play';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    };
  }

  handlePlayerClick = () => {
    this.setState((prevState) => ({ playing: !prevState.playing }));
  };

  render() {
    return (
      <div>
        {this.state.playing ? (
          <Pause1 onPlayerClick={this.handlePlayerClick} />
        ) : (
          <Play1 onPlayerClick={this.handlePlayerClick} />
        )}
      </div>
    );
  }
}

export default Player;