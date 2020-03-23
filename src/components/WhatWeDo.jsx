import React, { Component } from 'react';
import styled from 'styled-components';

const WhatWeDoContainer = styled.div`
  margin: 0 5vw;
  text-align: center;
  color: white;
  padding: 0vw 20vw;
  font-size: 1vw;
  line-height: 2vw;
  font-family: Verdana, sans-serif;
  font-style: normal;
`
const LineOne = styled.div`
  margin: 0 5vw;
  text-align: center;
  color: white;
  font-size: 3vw;
  font-family: Verdana, sans-serif;
  font-style: normal;
`

class WhatWeDo extends Component {
  render() {
    return (
      <main className="main-2">
        <div className="main-text">
         <p className="main-text-text">What We Do</p>
         <p className="main-text-stop-red">.</p>
        </div>
        <WhatWeDoContainer>
          Consultation.

          Production.

          Strategy.

          <p>Astrid offers podcasting production from beginning to end. Whether you need assistance bringing your idea to life, improving pre-existing content or a full production, we are here to support you. We pride ourselves on our profound industry knowledge and well-rounded set of skills that allow us to produce top quality podcasts. Our 3 core pillars are fully customisable to your needs. From ideation to release day, we're here every step of the way.</p>
        </WhatWeDoContainer>
      </main>
    );
  }
}

export default WhatWeDo;