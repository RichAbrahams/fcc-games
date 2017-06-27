/**
*
* ListItem
*
*/

import React from 'react';
import Item from './styles';
import { browserHistory } from 'react-router';


function ListItem(props) {
  return (
    <Item onClick={() => browserHistory.push(props.page)}>
      {props.children}
    </Item>
  );
}

ListItem.propTypes = {

};

export default ListItem;
