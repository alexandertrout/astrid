import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInLeftBig } from 'react-animations';
 
const fadeAnimation = keyframes`${fadeInLeftBig}`;
 
const FadeDiv = styled.div`
  animation: 2s ${fadeAnimation};
`

class AboutUs extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default AboutUs;