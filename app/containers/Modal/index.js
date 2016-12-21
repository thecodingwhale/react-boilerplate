/*
 *
 * Modal
 *
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ModalActions from './actions';
import selectModal from './selectors';
import { Wrapper, TopRightIcon } from './styles';
import Icon from '../../components/Icon';

export class Modal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    this.props.hideModal();
  }
  render() {
    const { show } = this.props.modal;
    return (
      <Wrapper
        style={{
          display: (show ? 'block' : 'none'),
        }}
      >
        <TopRightIcon onClick={this.closeModal}>
          <Icon name="remove" />
        </TopRightIcon>
        {this.props.children}
      </Wrapper>
    );
  }
}

const mapStateToProps = selectModal();

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
      ModalActions,
      dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
