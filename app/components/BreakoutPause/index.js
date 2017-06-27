/**
*
* BreakOutPause
*
*/

import React from 'react';
import { Wrapper } from './styles';


function BreakoutPause({ canvasWidth, canvasHeight, togglePause }) {
  return (
    <Wrapper canvasWidth={canvasWidth} canvasHeight={canvasHeight} onClick={() => togglePause()}>
      <h1>Breakout</h1>
      <h2>Paused, click to resume</h2>
    </Wrapper>
  );
}

BreakoutPause.propTypes = {

};

export default BreakoutPause;
