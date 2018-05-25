import React, { Component } from 'react';
import HeaderStyle from './HeaderStyle';

class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <HeaderStyle>
        <div id="header" className="container">
          <div id="logo">
            <h1>
              <span className="fa fa-bolt" />
              <a href="#page">LOGO</a>
            </h1>
          </div>
          <div id="menu">
            <ul>
              <li className="current_page_item"><a href="#top" title="">Homepage</a></li>
              <li><a href="#top" title="">Our Clients</a></li>
              <li><a href="#top" title="">About Us</a></li>
              <li><a href="#top" title="">Careers</a></li>
              <li><a href="#top" title="">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </HeaderStyle>
    );
  }
}

export default Header;
