/**
*
* LinkWrapper
*
*/

import React from 'react';
import Wrapper from './styles';


function LinkWrapper(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

LinkWrapper.propTypes = {

};

export default LinkWrapper;
