import React, { Component } from 'react';
import { Link } from "@reach/router"
import styled, { keyframes } from 'styled-components';
import { fadeInLeftBig } from 'react-animations';
 
const fadeAnimation = keyframes`${fadeInLeftBig}`;
 
const FadeDiv = styled.div`
  animation: 2s ${fadeAnimation};
`;
const FadeDiv2 = styled.div`
  animation: 3s ${fadeAnimation};
`;
const FadeDiv3 = styled.div`
  animation: 4s ${fadeAnimation};
`;

class MenuBar extends Component {
  state = {
    isClicked: false
  }
  render() {
    return (
        <ul>
          <FadeDiv3><Link to="/"><li>ABOUT US</li></Link></FadeDiv3>
          <FadeDiv2><Link to="/what-we-do"><li>WHAT WE DO</li></Link></FadeDiv2>
          <FadeDiv><Link to="/get-in-touch"><li>GET IN TOUCH</li></Link></FadeDiv>
        </ul>
    );
  }
}

export default MenuBar;