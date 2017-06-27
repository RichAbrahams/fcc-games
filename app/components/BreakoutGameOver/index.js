/**
*
* BreakoutGameOver
*
*/

import React from 'react';
import { Wrapper } from './styles';


function BreakoutGameOver({ canvasWidth, canvasHeight, showStartScreen, score, resetGame }) {
  return (
    <Wrapper canvasWidth={canvasWidth} canvasHeight={canvasHeight} onClick={() => resetGame()}>
      <h1>Game over</h1>
      <h2>score: {score}</h2>
    </Wrapper>
  );
}
BreakoutGameOver.propTypes = {

};

export default BreakoutGameOver;
