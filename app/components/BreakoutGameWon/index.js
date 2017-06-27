/**
*
* BreakoutGameWon
*
*/

import React from 'react';
import { Wrapper } from './styles';


function BreakoutGameWon({ canvasWidth, canvasHeight, showStartScreen, score, resetGame }) {
  return (
    <Wrapper canvasWidth={canvasWidth} canvasHeight={canvasHeight} onClick={() => resetGame()}>
      <h1>Game complete!</h1>
      <h2>score: {score}</h2>
    </Wrapper>
  );
}
BreakoutGameWon.propTypes = {

};

BreakoutGameWon.propTypes = {

};

export default BreakoutGameWon;
