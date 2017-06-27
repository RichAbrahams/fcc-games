/**
*
* BreakoutLevel
*
*/

import React, { PropTypes } from 'react';
import { Wrapper } from './styles';

function BreakoutLevel({ canvasWidth, canvasHeight, startLevel, level }) {
  setTimeout(() => {
    startLevel();
  }, 3000);
  return (
    <Wrapper canvasWidth={canvasWidth} canvasHeight={canvasHeight} >
      <h1>Level {level}</h1>
    </Wrapper>
  );
}

BreakoutLevel.propTypes = {
  canvasWidth: PropTypes.number.isRequired,
  canvasHeight: PropTypes.number.isRequired,
  startLevel: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
};

export default BreakoutLevel;
