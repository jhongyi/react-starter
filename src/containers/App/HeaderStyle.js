import styled from 'styled-components';

const HeaderStyle = styled.div`
  #header {
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -moz-justify-content: space-between;
    -webkit-justify-content: space-between;
    -ms-justify-content: space-between;
    justify-content: space-between;
    background: #222629 url("images/overlay.png");
    box-shadow: inset -0.25em 0 0.25em 0 rgba(0, 0, 0, 0.1);
    color: #fff;
    height: 100%;
    left: 0;
    overflow-y: auto;
    position: fixed;
    text-align: right;
    top: 0;
    width: 375px;
  }

  #header .top {
    -moz-flex-grow: 1;
    -webkit-flex-grow: 1;
    -ms-flex-grow: 1;
    flex-grow: 1;
  }

  #header .bottom {
    -moz-flex-shrink: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-shrink: 0;
    flex-shrink: 0;
    padding: 1.5em 0 0.75em 0;
  }

  #header .bottom > :last-child {
    margin-bottom: 0;
  }

  #header .icons {
    font-size: 0.8em;
    text-align: center;
  }

  #header .icons a {
    color: #41484c;
    -moz-transition: color 0.35s ease-in-out;
    -webkit-transition: color 0.35s ease-in-out;
    -ms-transition: color 0.35s ease-in-out;
    transition: color 0.35s ease-in-out;
  }

  #header .icons a:hover {
    color: #fff;
  }

  #logo {
    position: relative;
    margin: 1.75em 1.5em 1.5em 1.5em;
    min-height: 48px;
    cursor: default;
  }

  #logo h1 {
    position: relative;
    color: #fff;
    font-weight: 600;
    font-size: 1em;
    line-height: 1em;
  }

  #logo p {
    position: relative;
    display: block;
    font-size: 0.6em;
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.25em;
    margin: 0.5em 0 0 0;
  }

  #logo .image {
    position: absolute;
    left: 0;
    top: 0;
  }

  #nav ul {
    margin-bottom: 0;
  }

  #nav ul li a {
    display: block;
    padding: 0.5em 1.5em 0.5em 1.5em;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    outline: 0;
    border: 0;
    -moz-transition: none;
    -webkit-transition: none;
    -ms-transition: none;
    transition: none;
  }

  #nav ul li a span {
    position: relative;
    display: block;
    font-size: 0.8em;
  }

  #nav ul li a span:before {
    position: absolute;
    left: 0;
    color: #41484c;
    text-align: center;
    width: 1.25em;
    line-height: 1.75em;
  }

  #nav ul li a.active {
    background: rgba(0, 0, 0, 0.15);
    box-shadow: inset 0 0 0.25em 0 rgba(0, 0, 0, 0.125);
    color: #fff;
  }

  #nav ul li a.active span:before {
    color: #e27689;
  }
`;

export default HeaderStyle;
