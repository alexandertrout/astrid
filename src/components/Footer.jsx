import React, { Component } from 'react';
import styled from 'styled-components';
import AstridLogo from './AstridLogo';


const FooterSection = styled.section`
  padding: 5vw 10vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  justify-items: center;
`

const Socials = styled.section`
  display: flex;
  flex-direction: column;
`

const Item = styled.p`
  margin: 0;
  padding: 0;
  font-size: 2vw;
   letter-spacing: 0.05em;
  :hover{
    opacity: 50%;
  }
`

class Footer extends Component {
  render() {
    return (
      <FooterSection>
        <Item>stuff</Item>
        <Socials>
          <Item>Facebook</Item>
          <Item>Instagram</Item>
          <Item>Apple Podcasts</Item>
          <Item>Spotify</Item>
          <Item>Twitter</Item>
          <Item>YouTxube</Item>
        </Socials>
        <AstridLogo/>
      </FooterSection>
    );
  }
}

export default Footer;