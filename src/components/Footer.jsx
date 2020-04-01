import React, { Component } from 'react';
import styled from 'styled-components';
import AstridLogo from './AstridLogo';


const FooterSection = styled.section`
  padding: 5vw 10vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  justify-items: center;
    @media only screen and (max-width: 600px) {
      display: grid;
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: auto auto;
  font-size: 4vw;
  line-height: 4.5vw;
}
`

const Socials = styled.section`
  display: flex;
  flex-direction: column;
`

const Item = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.5vw;
   letter-spacing: 0.05em;
  :hover{
    opacity: 50%;
  }
   @media only screen and (max-width: 600px) {
  font-size: 4vw;
  line-height: 4.5vw;
  padding: 2vw;
}
`
const StyledLogo = styled.div`
@media only screen and (max-width: 600px) {
  grid-column: 1/3;
  padding: 5vw 0vw;
}
`

const StyledTinyText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1vw;
  font-size: 0.7vw;
  text-align: center;
`

class Footer extends Component {
  render() {
    return (
      <>
      <FooterSection>
        <Item></Item>
        <Socials>
          <Item></Item>
        </Socials>
        <StyledLogo>
        <AstridLogo/>
        </StyledLogo>
      </FooterSection>
        <StyledTinyText>Website by Alex Trout<a href="https://alexandertrout.netlify.com/">https://alexandertrout.netlify.com/</a></StyledTinyText>
      </>
    );
  }
}

export default Footer;