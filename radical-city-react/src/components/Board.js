import React from 'react';
import styled from 'styled-components';
import Tile from './Tile';

const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const Squisher = styled.div`
  transform: scaleY(0.5);
  margin: auto;
`;

const Rotator = styled.div`
  display: grid;
  grid-template: repeat(4, 100px) / repeat(4, 100px);
  grid-auto-flow: row;
  transform: rotateZ(-45deg);
  margin: auto;
  width: 400px;
  height: 400px;
`;

const Board = () => (
  <Squisher>
    <Rotator>
      {tiles.map((tile, index) => (
        <Tile id={index} />
      ))}
    </Rotator>
  </Squisher>
);

export default Board;
