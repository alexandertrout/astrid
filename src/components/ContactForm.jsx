import React, { Component } from 'react';
import styled from 'styled-components';
import axios from "axios";

const SomeText = styled.h3`
margin: 0;
padding: 0;
display: flex;
flex-direction: row;
justify-content: center;
  @media only screen and (max-width: 600px) {
  font-size: 25px;
  }
`

const Container = styled.div`
  margin: 10vw 10vw 0vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0px 10px;
  @media only screen and (max-width: 600px) {
  margin: 0;
  }
`
const AboutText = styled.p`
  padding: 0vw 12vw;
  font-size: 1.3vw;
  line-height: 2vw;
  font-style: normal;
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

const FormContainer = styled.form`
  margin: 2vw;
  width: 50vw;
  height: 18vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 3fr 1fr;
  grid-gap: 10px;
  @media only screen and (max-width: 600px) {
  margin: 2vw 10vw;
  width: 80vw;
  height: auto;
  }
`

const NameInput = styled.input`
:focus {
    outline: none;
    border-color: #00A651;
  }
  grid-column: 1/2;
  grid-row: 1/2;
  padding: 4px;
  border: none;
  border-radius: 20px;
  padding: 1vw;
  font-size: 1vw;
  box-shadow: 0px 4px 21px -13px rgba(0,0,0,0.75);
  @media only screen and (max-width: 600px) {
  font-size: 20px;
  }
`
const NumberInput = styled.input`
:focus {
    outline: none;
    border-color: #00A651;
  }
  grid-column: 1/2;
  grid-row: 2/3;
  padding: 4px;
  border: none;
  border-radius: 20px;
  padding: 1vw;
  font-size: 1vw;
  box-shadow: 0px 4px 21px -13px rgba(0,0,0,0.75);
  @media only screen and (max-width: 600px) {
  font-size: 20px;
  }
`
const EmailInput = styled.input`
:focus {
    outline: none;
    border-color: #00A651;
  }
  grid-column: 1/3;
  grid-row: 3/4;
  padding: 4px;
  border: none;
  border-radius: 20px;
  padding: 1vw;
  font-size: 1vw;
  box-shadow: 0px 4px 21px -13px rgba(0,0,0,0.75);
  @media only screen and (max-width: 600px) {
  font-size: 20px;
  }
`

const MessageInput = styled.input`
:focus {
    outline: none;
    border-color: #00A651;
  }
  grid-column: 1/4;
  grid-row: 4/5;
  padding: 4px;
  border: none;
  border-radius: 20px;
  padding: 1vw;
  height: auto;
  font-size: 1vw;
  box-shadow: 0px 4px 21px -13px rgba(0,0,0,0.75);
  @media only screen and (max-width: 600px) {
  font-size: 20px;
  }
`
const SendButton = styled.button`
:hover {
  background-color:  #FF4E00;
}
  grid-column: 3/4;
  grid-row: 5/6;
  background-color: #00A651;
  color: white;
  border-radius: 20px;
  border: none;
  padding: 1vw;
  font-size: 1vw;
  @media only screen and (max-width: 600px) {
  font-size: 20px;
  padding: 10px;
  }
`

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    email: "",
    message: ""
  }

  handleChange = event => {
    const key = event.target.id;
    const input = event.target.value;
    this.setState({ [key]: input });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, email, number, message } = this.state;
    const from = 'astrid-media';
    if (name !== "" && email !== "" && number !== "" && message !== "") {
      const data = { name, number, email, message, from };
      axios.post(`https://portfolio-backend-alex.herokuapp.com/api/mail`, data)
        .then(response => {
          console.log(response);
          this.setState({ name: "", number: "", email: "", message: "" })
        }).catch(error => {
          console.log(error);
          this.setState({ name: "", number: "", email: "", message: "There was an error sending your message" })
        });
    } else {
      alert("Please fill in all form fields before attempting to send a message!");
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Container>
          <SomeText>Get In Touch.</SomeText>
          <AboutText>If you're looking to start a podcast and want to get the ball rolling, drop us a message and we will get back to you as soon as possible with our information pack and a reach out form.</AboutText>
          <AboutText>hello@astridmedia.co</AboutText>
        <FormContainer onSubmit={this.handleSubmit}>
          <NameInput type="text" placeholder="Name" id="name" value={this.state.name} onChange={this.handleChange} />
          <NumberInput type="text" placeholder="Contact Number" id="number" value={this.state.number} onChange={this.handleChange} />
          <EmailInput type="text" placeholder="Email" id="email" value={this.state.email} onChange={this.handleChange} />
          <MessageInput type="text" placeholder="Message" id="message" value={this.state.message} onChange={this.handleChange} />
          <SendButton>Submit</SendButton>
        </FormContainer >
        </Container>
      </div>
    );
  }
}

export default ContactForm;