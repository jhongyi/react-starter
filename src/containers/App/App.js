import React, { Component } from 'react';
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
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withRouter(App);
