/**
*
* PageWrapper
*
*/

import React from 'react';
import Wrapper from './styles';


function PageWrapper(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

PageWrapper.propTypes = {

};

export default PageWrapper;
