import React, { Component } from 'react';
import styled from 'styled-components';

const NotFoundDiv = styled.div`
  text-align: center;
  h1 {
    color: red;
  }
`;

class NotFound extends Component {
  render() {
    return (
      <NotFoundDiv>
        <h1>404</h1>
        <div>
          Sorry, page is not found.
        </div>
      </NotFoundDiv>
    );
  }
}

export default NotFound;
