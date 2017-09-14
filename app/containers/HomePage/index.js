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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func} from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import request from '../../actions/request';

class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
}

HomePage.propTypes = {
  loadData: func.isRequired,
}

const mapState = state => {};

const mapDispatch = dispatch => ({
  dispatch,
});

const mergeProps = ({ ...stateProps}, { dispatch, ...dispatchProps }) => ({
  ...stateProps,
  ...dispatchProps,
  loadData() {
    dispatch(
			request.loadData(),
		);
  }
})

export default connect(mapState, mapDispatch, mergeProps)(HomePage);