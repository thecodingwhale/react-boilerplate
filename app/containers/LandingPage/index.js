/*
 *
 * LandingPage
 *
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import selectLandingPage from './selectors';
import { FormattedMessage } from 'react-intl';
import * as ThemeActions from '../Theme/actions';
import * as ModalActions from '../Modal/actions';
import messages from './messages';
import Header from '../../components/Header';
import Description from '../../components/Description';
import Icon from '../../components/Icon';
import Modal from '../Modal';
import {
  Wrapper,
  Footer,
  Section,
  SocialIconsWrapper,
  TopRightIcon,
} from './styles';

const TitleHeader = styled(Header)`
  margin: 0px;
`;



export class LandingPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    darkTheme: React.PropTypes.func,
    lightTheme: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.selectDarkTheme = this.selectDarkTheme.bind(this);
    this.selectLightTheme = this.selectLightTheme.bind(this);
  }
  selectDarkTheme() {
    this.props.darkTheme();
  }
  selectLightTheme() {
    this.props.lightTheme();
  }
  closeModal() {
    this.setState({
      displayModal: false,
    });
  }
  showModal() {
    this.props.showModal();
  }
  render() {
    return (
      <Wrapper>
        <Helmet
          title="LandingPage"
          meta={[
            { name: 'description', content: 'Description of LandingPage' },
          ]}
        />
        <TopRightIcon onClick={this.showModal}>
          <Icon name="gear" />
        </TopRightIcon>
        <Modal>
            <button onClick={this.selectDarkTheme}>
              Dark Theme
            </button>
            <button onClick={this.selectLightTheme}>
              Light Theme
            </button>
        </Modal>
        <Section>
          <Description>
            <FormattedMessage {...messages.header} />
          </Description>
          <TitleHeader>
            Aldren Terante
          </TitleHeader>
          <Description>
            <FormattedMessage {...messages.description} />
          </Description>
          <Description>
            <FormattedMessage {...messages.location} />
          </Description>
        </Section>
        <Section>
          <SocialIconsWrapper>
            <Icon name="github" />
            <Icon name="linkedin" />
            <Icon name="envelope" />
          </SocialIconsWrapper>
          <Description>
            <FormattedMessage {...messages.letsTalk} />
          </Description>
          <Description>
            aldren.terante@gmail.com
          </Description>
        </Section>
        <Footer>
          <Description>
            <FormattedMessage {...messages.footer} />
          </Description>
        </Footer>
      </Wrapper>
    );
  }
}

const mapStateToProps = selectLandingPage();

/**
* mapDispatchToProps()
*/
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
      Object.assign(
        ThemeActions,
        ModalActions
      ),
      dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
