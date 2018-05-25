import styled from 'styled-components';

const HeaderStyle = styled.div`
  background: #2b2b2b;

  #header {
    width: 1200px;
    height: 100px;
    margin: 0px auto;
    position: relative;
  }

  #logo {
    position: absolute;
    top: 2em;
    width: 100%;
  }

  #logo h1 {
    display: inline-block;
    margin: 0;
    font-size: 2.5em;
    text-transform: uppercase;
    font-weight: 700;
    color: #ED7070;
    padding-right: 0.50em;
    border-right: 1px solid rgba(0,0,0,.1);
  }

  #logo span {
    display: inline-block;
    padding-right: .50em;
    letter-spacing: 0.10em;
    text-transform: uppercase;
    font-size: 0.90em;
  }

  #logo a {
    text-decoration: none;
    color: #FFF;
  }

  #logo .fa {
    color: #8dc63f;
  }

  #logo .fa:after {
    position: absolute;
    display: inline-block;
    padding-right: 2em;
  }

  #menu {
    position: absolute;
    right: 0;
    top: 1.6em;
  }

  #menu ul {
    display: inline-block;
    margin-top: 0;
    padding: 0;
    list-style: none;
  }

  #menu li {
    display: block;
    float: left;
    text-align: center;
  }

  #menu li a, #menu li span {
    display: inline-block;
    margin-left: 1px;
    padding: 1em 1.5em 0em 1.5em;
    letter-spacing: 0.10em;
    text-decoration: none;
    font-size: 1em;
    text-transform: uppercase;
    outline: 0;
    color: #FFF;
  }

  #menu .current_page_item a {
    color: #8dc63f;
  }
`;

export default HeaderStyle;
