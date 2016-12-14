/*
 *
 * LandingPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import selectLandingPage from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Header from '../../components/Header';
import Description from '../../components/Description';
import { Wrapper, Footer } from './styles';

const TitleHeader = styled(Header)`
  margin: 0px;
`;

export class LandingPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Helmet
          title="LandingPage"
          meta={[
            { name: 'description', content: 'Description of LandingPage' },
          ]}
        />
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
        <div>
          <Description>
            <FormattedMessage {...messages.letsTalk} />
          </Description>
          <Description>
            aldren.terante@gmail.com
          </Description>
        </div>
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

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
