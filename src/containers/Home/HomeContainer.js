import React, { Component } from 'react';
import HomeStyle from './HomeStyle';

class HomeContainer extends Component {
  render() {
    return (
      <HomeStyle>
        <div id="banner" className="container">
          <h2>Maecenas luctus lectus</h2>
          <p>content</p>
          <a href="#top" className="button">Etiam posuere</a>
        </div>
      </HomeStyle>
    );
  }
}

export default HomeContainer;
