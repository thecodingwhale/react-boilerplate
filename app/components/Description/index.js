/**
*
* Description
*
*/

import React from 'react';
import { Wrapper } from './styles';

class Description extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
  };

  render() {
    return (
      <Wrapper className={this.props.className}>
        {this.props.children}
      </Wrapper>
    );
  }
}

export default Description;
