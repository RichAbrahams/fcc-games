import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${props => props.canvasWidth}px;
  height: ${props => props.canvasHeight}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #21668a;
  color: white;
  font-family: 'Luckiest Guy', cursive;
  -webkit-font-smoothing: antialiased;
;
`;

