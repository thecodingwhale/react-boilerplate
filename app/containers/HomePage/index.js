/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  onLeftIconButtonTouchTap() {
    console.log('test');
  }
  render() {
    return (
      <div>
        <AppBar
          style={{
            left: '256px'
          }}
          title="My AppBar"
        />
        <Drawer
          containerStyle={{
            'position': 'absolute'
          }}
          open={ true }
        >
        </Drawer>
      </div>
    );
  }
}
