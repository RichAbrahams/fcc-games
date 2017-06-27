import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

export const ScoreInnerWrapper = styled.div`
  padding: 0.5em;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1em 2em 1em 2em;
;
`;

export const ScoreWrapper = styled.div`
  width: 100%;
  display: flex;
  width: ${(props) => props.width}px;
  background: #79213b;
  color: white;
;
`;

export const Icon = styled(FontAwesome)`
  margin: 0em 0.5em 0em 0em;
;
`;

export const Span = styled.span`
  font-size: 1.5em;
;
`;

export const Section = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
;
`;
