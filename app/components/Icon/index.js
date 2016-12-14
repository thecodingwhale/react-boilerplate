/**
*
* Icon
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome';

class Icon extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    name: React.PropTypes.string,
    className: React.PropTypes.string,
  };

  render() {
    return (
      <FontAwesome
        className={this.props.className}
        name={this.props.name}
        style={{
          fontSize: '1.4em',
        }}
      />
    );
  }
}

export default Icon;
