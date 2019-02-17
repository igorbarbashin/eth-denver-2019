import React, { Component } from 'react';
import { createGridModel } from './utils/grid';
import Board from './components/Board';

class Game extends Component {
  state = {
    matchID: '',
    showModal: false,
    grid: createGridModel(4),
    selectedTile: null,
    // helps to position theselected tile
    lastClickPos: null,
  };

  render() {
    const { grid } = this.state;
    const tiles = Object.values(grid);
    return <Board tiles={tiles} />
  }
}