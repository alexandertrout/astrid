import React, { Component } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const WhatWeDoContainer = styled.div`
  margin: 0vw 8vw 0vw 12vw;
  text-align: center;
  color: #484D53;
  font-size: 1.3vw;
  line-height: 2vw;
  /* font-family: Verdana, sans-serif; */
  font-style: normal;
  display: grid;
  grid-template-columns: 1fr 1fr;

    @media only screen and (max-width: 600px) {
    margin: 0vw 10vw;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
  }
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
    @media only screen and (max-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @import url('./fonts/brandon-grotesque-light-58a8a4b38001d.otf');
  body {
    font-family: 'brandon-light';
  }
  font-family: brandon-light;
  @media only screen and (max-width: 600px) {
    font-size: 4vw;
    line-height: 4.5vw;
  }
`
const Text = styled.div`
  display: flex;
  text-align: left;
  color: #484D53;
  font-size: 2.5vw;
  font-style: normal;
  /* letter-spacing: 0.2em; */
      @media only screen and (max-width: 600px) {
    font-size: 4vw;
    justify-content: flex-end;
  }
`

class WhatWeDo extends Component {
  render() {
    return (
      <main className="main-2">
        <Fade top>
        <div className="main-text-2">
         <p className="main-text-text">What We Do</p>
         <p className="main-text-stop-red">.</p>
        </div>
        </Fade>
        <WhatWeDoContainer>

          <Fade left>
          <TextContainer>
            <Text><p>Consultation</p><p className="main-text-stop-red">.</p></Text>
            <Text><p>Production</p><p className="main-text-stop-red">.</p></Text>
            <Text><p>Strategy</p><p className="main-text-stop-red">.</p></Text>
          </TextContainer>
          </Fade>
        
        <Fade right>
          <InfoContainer>
            <p>Astrid offers podcasting production from beginning to end.</p>
            <p>Whether you need assistance bringing your idea to life, improving pre-existing content or a full production, we are here to support you.</p>
            <p>We pride ourselves on our profound industry knowledge and well-rounded set of skills that allow us to produce top quality podcasts.</p>
            <p>Our 3 core pillars are fully customisable to your needs. From ideation to release day, we're here every step of the way.</p>  
          </InfoContainer>
          </Fade>
             
        </WhatWeDoContainer>
      </main>
    );
  }
}

export default WhatWeDo;