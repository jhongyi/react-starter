import React, { Component } from 'react';
import MainStyle from './MainStyle';

class Main extends Component {
  render() {
    /* TODO: RWD */
    return (
      <MainStyle>

        <div id="main">
          {this.props.child}
        </div>

      </MainStyle>
    );
  }
}

export default Main;
