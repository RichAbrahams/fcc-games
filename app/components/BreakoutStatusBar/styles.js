import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

export const ScoreInnerWrapper = styled.div`
  padding: 0.5em;
  display: flex;
  width: 100%;
  justify-content: space-between;
;
`;

export const ScoreWrapper = styled.div`
  width: 100%;
  display: flex;
  width: ${(props) => props.width}px;
;
`;

export const Icon = styled(FontAwesome)`
  margin: 0em 0.5em 0em 0em;
;
`;

export const Span = styled.span`
  font-size: 2em;
;
`;
