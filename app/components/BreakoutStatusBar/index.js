/**
*
* BreakoutStatusBar
*
*/

import React from 'react';
import { ScoreWrapper, ScoreInnerWrapper, Icon, Span, Section } from './styles';


function BreakoutStatusBar(props) {
  const { score, lives, level, canvasWidth } = props;
  const livesIcons = [];
  for (let i = 0; i < lives; i += 1) {
    livesIcons.push(<Icon name="user" key={i} />);
  }
  const hasLevel = level > 0 ? <Section><Span>Level: {level}</Span></Section> : null;

  return (
    <ScoreWrapper width={canvasWidth}>
      <ScoreInnerWrapper>
        <Section>
          <Span>Lives: {livesIcons}</Span>
        </Section>
        {hasLevel}
        <Section>
          <Span>Score: {score}</Span>
        </Section>
      </ScoreInnerWrapper>
    </ScoreWrapper>
  );
}

BreakoutStatusBar.propTypes = {

};

export default BreakoutStatusBar;
