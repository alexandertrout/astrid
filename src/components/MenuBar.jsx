import React, { Component } from 'react';
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
          <FadeDiv3><li>ABOUT US</li></FadeDiv3>
          <FadeDiv2><li>WHAT WE DO</li></FadeDiv2>
          <FadeDiv><li>GET IN TOUCH</li></FadeDiv>
        </ul>
    );
  }
}

export default MenuBar;