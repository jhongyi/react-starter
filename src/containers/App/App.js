import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from './Header';
// @connect(
//   state => ({
//     loading: state.spinner.loading,
//     msg: state.spinner.msg,
//   }),
// )

class App extends Component {
  render() {
    /* TODO: RWD */
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(App);

App.propTypes = {
  children: PropTypes.element.isRequired,
};
