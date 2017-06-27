/**
*
* PageHeader
*
*/

import React from 'react';
import Header from './styles';


function PageHeader(props) {
  return (
    <Header>
      {props.children}
    </Header>
  );
}

PageHeader.propTypes = {

};

export default PageHeader;
