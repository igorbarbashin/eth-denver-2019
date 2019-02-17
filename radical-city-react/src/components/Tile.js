import React from 'react';
import styled from 'styled-components';
import Building from './Building';

const Rhombus = styled.button`
  /* skewY */
  width: 100px;
  height: 100px;
  background: #351788;
  border: 0.5px solid #4c27a4;
  outline: none;

  &:active {
    outline: none;
  }

  &:hover {
    background: #5a2eb4;
  }
`;

const Unrotator = styled.div`
  transform: rotateZ(45deg);
`;

const Unsquisher = styled.div`
  transform: scaleY(2);
`;

const Tile = ({ id }) => (
  <Rhombus id={id}>
    <Unrotator>
      <Unsquisher>
        <Building type="res" />
      </Unsquisher>
    </Unrotator>
  </Rhombus>
);

export default Tile;
