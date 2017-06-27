/**
*
* CanvasBackground
*
*/

import React from 'react';
import Wrapper from './styles';


function CanvasBackground(props) {
  return (
    <Wrapper width={props.width} height={props.height}>
      {props.children}
    </Wrapper>
  );
}

CanvasBackground.propTypes = {

};

export default CanvasBackground;
