/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import NavWrapper from 'components/NavWrapper';
import Logo from 'components/Logo';
import LinkWrapper from 'components/LinkWrapper';
import UnorderedList from 'components/UnorderedList';
import ListItem from 'components/ListItem';
import AppWrapper from 'components/AppWrapper';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <AppWrapper>
        <NavWrapper>
          <Logo />
          <LinkWrapper>
            <UnorderedList>
              <ListItem page={'tennis'}>Tennis</ListItem>
              <ListItem page={'breakout'}>Breakout</ListItem>
            </UnorderedList>
          </LinkWrapper>
        </NavWrapper>
        {React.Children.toArray(this.props.children)}
      </AppWrapper>
    );
  }
}
