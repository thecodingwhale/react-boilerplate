/*
 *
 * LandingPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectLandingPage from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export class LandingPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="LandingPage"
          meta={[
            { name: 'description', content: 'Description of LandingPage' },
          ]}
        />
        <FormattedMessage {...messages.header} /><br />
        Aldren Terante<br />
        <FormattedMessage {...messages.description} /><br />
        <FormattedMessage {...messages.location} /><br />
      </div>
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
