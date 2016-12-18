/*
 *
 * Theme
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectTheme from './selectors';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './styles';
import { themes } from '../../themes';

export class Theme extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    theme: React.PropTypes.object,
    children: React.PropTypes.node,
  };

  render() {
    const { theme } = this.props;
    return (
      <ThemeProvider theme={themes[theme.type]}>
        <Wrapper>
          {React.Children.toArray(this.props.children)}
        </Wrapper>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = selectTheme();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Theme);
