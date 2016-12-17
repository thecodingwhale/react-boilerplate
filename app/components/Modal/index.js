/**
*
* Modal
*
*/
import React from 'react';
import { Wrapper } from './styles';

class Modal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    isVisible: React.PropTypes.bool,
    children: React.PropTypes.node,
  };

  render() {
    const { isVisible } = this.props;
    return (
      <Wrapper
        style={{
          display: (isVisible ? 'block' : 'none'),
        }}
      >
        { this.props.children }
      </Wrapper>
    );
  }
}

export default Modal;
