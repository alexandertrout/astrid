import React from 'react';
import astrid from '../images/ASTRID-FINAL.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
  background-color: white;
  width: 22vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  z-index: 999;
  @media only screen and (max-width: 600px) {
  width: 50vw;
  }
`
const ImgContainer = styled.img`
  width: 5vw;
  height: auto;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 600px) {
  width: 10vw;
  }
`
const TextContainer = styled.div`
z-index: 998;
  width: 15vw;
  height: 6vw;
  margin: 0;
  padding: 0vw 1vw;
  position: relative;
  @media only screen and (max-width: 600px) {
  width: 50vw;
  height: 10vw;
  }
`
const MainText = styled.p`
  font-size: 2.2vw;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0.4vw;
  left: 2vw;
  @media only screen and (max-width: 600px) {
  font-size: 5vw;
  position: absolute;
  bottom: 2vw;
  left: 5.5vw;
  }
`
const SubText = styled.p`
  font-family: Verdana, sans-serif;
  font-size: 0.6vw;
  font-style: normal;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 1.6vw;
  left: 5.1vw;
  @media only screen and (max-width: 600px) {
  font-size: 2vw;
  position: absolute;
  bottom: 1.2vw;
  left: 11vw;
  }
`

const AstridLogo = () => {
  return (
    <LogoContainer>
      <ImgContainer src={astrid} alt='astrid-logo'/>
      <TextContainer>
        <MainText>Astrid Media</MainText>
        <SubText>PODCAST AGENCY</SubText>
      </TextContainer>
    </LogoContainer>
  );
};

export default AstridLogo;