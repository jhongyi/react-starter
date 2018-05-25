import styled from 'styled-components';

const HomeStyle = styled.div`
  padding: 10em 0em;
  background-image: url(${require('~~static/images/banner.jpg')});
  background-position: center;
  background-size: cover;

  #banner {
    margin: 0px auto;
    width: 1200px;
    overflow: hidden;
    width: 1000px;
    text-align: center;
    color: rgba(255,255,255,.7);
    font-size: 1.5em;
  }

  #banner a {
    color: rgba(255,255,255,.9);
  }

  #banner h2 {
    padding-bottom: 0.50em;
    font-weight: 400;
    font-size: 3em;
    color: #FFF;
  }

  #banner .button {
    margin-top: 2em;
    background: #6fac1b;
  }

  #content {
    padding: 0em 7em;
  }

  .button {
    display: inline-block;
    padding: 1.3em 3em;
    background: #8dc63f;
    -moz-transition: opacity 0.25s ease-in-out;
    -webkit-transition: opacity 0.25s ease-in-out;
    -o-transition: opacity 0.25s ease-in-out;
    -ms-transition: opacity 0.25s ease-in-out;
    transition: opacity 0.25s ease-in-out;
    letter-spacing: 0.20em;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    color: #FFF;
  }

  .button:hover {
    background: #86bd3b;
  }
`;

export default HomeStyle;
