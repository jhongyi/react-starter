import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router';


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
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(App);

App.propTypes = {
  children: PropTypes.element.isRequired,
};
