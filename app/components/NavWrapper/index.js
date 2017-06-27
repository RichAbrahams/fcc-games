/**
*
* NavWrapper
*
*/

import React from 'react';
import Wrapper from './styles';


function NavWrapper(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

NavWrapper.propTypes = {

};

export default NavWrapper;
