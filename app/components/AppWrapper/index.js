/**
*
* AppWrapper
*
*/

import React from 'react';
import Wrapper from './styles';

function AppWrapper(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

AppWrapper.propTypes = {

};

export default AppWrapper;
