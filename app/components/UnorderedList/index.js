/**
*
* UnorderedList
*
*/

import React from 'react';
import UL from './styles';


function UnorderedList(props) {
  return (
    <UL>
      {props.children}
    </UL>
  );
}

UnorderedList.propTypes = {

};

export default UnorderedList;
