import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from './Header';
import Main from './Main';
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
        <Main child={this.props.children} />
      </div>
    );
  }
}

export default withRouter(App);

App.propTypes = {
  children: PropTypes.element.isRequired,
};
