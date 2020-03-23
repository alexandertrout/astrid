import React, { Component } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const AboutContainer = styled.div`
  text-align: center;
  color: white;
`
const InnerContainer = styled.div`
  padding: 0vw 0vw 0vw 4vw;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const AboutTitle = styled.h3`
  font-size: 2vw;
  letter-spacing: 0.2em;
`

const AboutTextMid = styled.p`
  font-size: 1.5vw;
  letter-spacing: 0.1em;
`

const AboutText = styled.p`
  padding: 0vw 9vw;
  font-size: 1vw;
  line-height: 2vw;
  font-family: Verdana, sans-serif;
  font-style: normal;
`
const Title = styled.p`
  margin: 0;
  padding: 0;
  /* font-size: 6vw; */
  letter-spacing: 0.2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

class AboutInfo extends Component {
  render() {
    return (
      <AboutContainer>
        <InnerContainer>
              <div>
                <Fade left>
                <AboutTitle>
                  Creative, strategic and original.
                </AboutTitle>
                </Fade>
                <Fade left>
              <AboutText>
                More and more brands are realising that they need to incorporate podcasting into their content marketing strategy but with almost 1 million podcasts currently live, it's a little overwhelming. The question is, how do you create something that breaks through the noise?
              </AboutText>
              </Fade>
              <Fade left>
              <AboutTextMid>
                We have the answers.
              </AboutTextMid>
              </Fade>
              <Fade left>
              <AboutText>
                Not only is the Astrid team responsible for producing podcasts that have trended on Spotify, hit number 1 in the Apple Podcasts chart and been listed as one of their 'Best Listens of 2019' but we have made BBC Radio 1 documentaries too. 
              </AboutText>
              </Fade>
              <Fade left>
              <AboutText>
                Our collective 10 year industry experience of working in audio with global brands, has given us the ability to harbour the tools and knowledge needed to produce original, branded podcasts that make an impact.
              </AboutText>
              </Fade>
              </div>

          
            <Title>
              <div className='main-text'>
                <Fade right>
                <p className='main-text-text'>About Us</p><p className='main-text-stop-green'>.</p>
                </Fade>
              </div>
            </Title>
          
        </InnerContainer>
      </AboutContainer>
    );
  }
}

export default AboutInfo;