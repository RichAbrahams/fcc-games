/**
*
* BreakoutStart
*
*/

import React from 'react';
import { Wrapper } from './styles';


function BreakoutStart({ canvasWidth, canvasHeight, showLevelIntro }) {
  return (
    <Wrapper canvasWidth={canvasWidth} canvasHeight={canvasHeight} onClick={() => showLevelIntro()}>
      <h2>Click to start</h2>
    </Wrapper>
  );
}

BreakoutStart.propTypes = {

};

export default BreakoutStart;
