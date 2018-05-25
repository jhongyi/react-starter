import styled from 'styled-components';

const MainStyle = styled.div`
  #main {
    margin-left: 375px;
  }

  #main > section {
    margin: 0;
    overflow: hidden;
    padding: 4em 0;
    box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.05), inset 0 0.1em 0.1em 0 rgba(0, 0, 0, 0.025);
    text-align: center;
    // background-image: url("images/overlay.png");
  }

  #main > section.dark {
    color: #ddd;
    color: rgba(255, 255, 255, 0.75);
  }

  #main > section.dark h2, #main > section.dark h3, #main > section.dark h4, #main > section.dark h5, #main > section.dark h6 {
    color: inherit;
  }

  #main > section.dark strong {
    color: #fff;
    border-color: inherit;
  }

  #main > section.dark a {
    color: #fff;
    border-color: inherit;
  }

  #main > section.dark a:hover {
    border-bottom-color: rgba(255, 255, 255, 0);
  }

  #main > section.cover {
    padding: 6em 0;
    background-size: cover;
    background-position: center center;
  }

  #main > section.one {
    background-color: #81918E;
    background-image: url("../../images/banner.jpg");
  }

  #main > section.two {
    background-color: #f5fafa;
  }

  #main > section.three {
    background-color: #ecf1f1;
  }

  #main > section.four {
    background-color: #e8edec;
  }

`;

export default MainStyle;
