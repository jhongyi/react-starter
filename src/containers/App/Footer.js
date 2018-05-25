import React, { Component } from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  overflow: hidden;
  padding: 2em 0em 2em 0em;
  border-top: 1px solid rgba(255,255,255,0.08);

  p {
    letter-spacing: 0.20em;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.80em;
    color: rgba(255,255,255,0.3);
  }

  a {
    text-decoration: none;
    color: rgba(255,255,255,0.6);
  }
`;

class Footer extends Component {
  render() {
    return (
      <FooterDiv>
        <p>
          &copy; WebSite created by Jacky | &nbsp;
          <a href="https://github.com/jhongyi">Github</a>
        </p>
      </FooterDiv>
    );
  }
}

export default Footer;
