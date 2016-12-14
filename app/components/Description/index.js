/**
*
* Description
*
*/

import React from 'react';
import { Wrapper } from './styles';

class Description extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        { this.props.children }
      </Wrapper>
    );
  }
}

export default Description;
