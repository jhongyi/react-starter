import React, { Component } from 'react';
import HeaderStyle from './HeaderStyle';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chooseNav: 'intro'
    };
  }

  activeChooseNav = (nav) => {
    console.log('------------------------------------');
    console.log('gggg');
    console.log('------------------------------------');
    this.setState({
      chooseNav: nav
    });
  }

  render() {
    /* TODO: RWD */
    console.log('------------------------------------');
    console.log(this.state);
    console.log('------------------------------------');
    return (
      <HeaderStyle id="header">
        <div className="top">
          <div id="logo">
            <h1 id="title">Jane Doe</h1>
            <p>Hyperspace Engineer</p>
          </div>

          <nav id="nav">
            <ul>
              <li><a href="#top" id="top-link" className={`skel-layers-ignoreHref ${this.state.chooseNav === 'intro' ? 'active' : ''}`} onClick={() => this.activeChooseNav('intro')}><span className="icon fa-home">Intro</span></a></li>
              <li><a href="#top" id="about-link" className={`skel-layers-ignoreHref ${this.state.chooseNav === 'about' ? 'active' : ''}`} onClick={() => this.activeChooseNav('about')}><span className="icon fa-user">About Me</span></a></li>
              <li><a href="#top" id="contact-link" className={`skel-layers-ignoreHref ${this.state.chooseNav === 'contact' ? 'active' : ''}`} onClick={() => this.activeChooseNav('contact')}><span className="icon fa-envelope">Contact</span></a></li>
            </ul>
          </nav>
        </div>
        <div className="bottom">
          <ul className="icons">
            <li><a href="#top" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#top" className="icon fa-github"><span className="label">Github</span></a></li>
            <li><a href="#top" className="icon fa-envelope"><span className="label">Email</span></a></li>
          </ul>
        </div>
      </HeaderStyle>
    );
  }
}

export default Header;
