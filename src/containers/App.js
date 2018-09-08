import React, { Component } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import '../styles/App.css';
require('../assets/favicon.ico');

import logo from '../assets/logo.svg';

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  font-family: Helvetica, Roboto, Sans-Serif;
  text-align: center;
  color: white;
  background: -webkit-linear-gradient(40deg, #9796F0 10%, #FBC7D4 100%);
  background: -moz-linear-gradient(40deg, #9796F0 10%, #FBC7D4 100%);
  background: -ms-linear-gradient(40deg, #9796F0 10%, #FBC7D4 100%);
  background: -o-linear-gradient(40deg, #9796F0 10%, #FBC7D4 100%);
  background: linear-gradient(40deg, #9796F0 10%, #FBC7D4 100%);
`;

const Title = styled.h1`
  font-size: 6em;
`;

const Logo = styled.img.attrs({
  src: logo,
  alt: "Beat Crate logo"
})`
  height: 180px;
  filter: drop-shadow(4px 2px 2px #4444dd);
`;

const Text = styled.span`
  font-size: 2em;
  opacity: 0.8;
`;

const Flex = styled.div`
  justify-self: center;
  align-self: center;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Flex>
          <Logo />
          <Title>beat crate</Title>
          <Text>coming soon</Text>
        </Flex>
      </Wrapper>
    );
  }
}

export default App;