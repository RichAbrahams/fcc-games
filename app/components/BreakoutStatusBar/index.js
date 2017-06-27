/**
*
* BreakoutStatusBar
*
*/

import React from 'react';
import { ScoreWrapper, ScoreInnerWrapper, Icon, Span } from './styles';


function BreakoutStatusBar(props) {
  const { score, lives, level, canvasWidth } = props;
  const livesIcons = [];
  for (let i = 0; i < lives; i += 1) {
    livesIcons.push(<Icon name="user" key={i} />);
  }
  return (
    <ScoreWrapper width={canvasWidth}>
      <ScoreInnerWrapper>
        <div>
          <Span>Lives: {livesIcons}</Span>
        </div>
        <div>
          <Span>Level: {level}</Span>
        </div>
        <div>
          <Span>Score: {score}</Span>
        </div>
      </ScoreInnerWrapper>
    </ScoreWrapper>
  );
}

BreakoutStatusBar.propTypes = {

};

export default BreakoutStatusBar;
