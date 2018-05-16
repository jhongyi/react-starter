import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HelloActions from './HelloActions';

@connect(
  state => ({
    word: state.hello.word
  }),
  dispatch => ({
    actions: bindActionCreators(HelloActions, dispatch)
  })
)

export default class HelloContainer extends Component {
  componentWillMount() {
    this.props.actions.sayHello();
  }

  render() {
    const { word } = this.props;

    return (
      <div>
        { word }
      </div>
    );
  }
}

HelloContainer.WrappedComponent.propTypes = {
  word: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    sayHello: PropTypes.func.isRequired,
  }).isRequired,
};
