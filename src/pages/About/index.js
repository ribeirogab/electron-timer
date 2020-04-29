import React from 'react';

import logo from '../../assets/icon.png';

import { Container } from './styles';

const { shell } = window.require('electron');
const { versions } = window.require('process');

function About() {
  document.title = 'About';

  function openAuthorGithub() {
    shell.openExternal('https://github.com/ribeirogab');
  }

  return (
    <Container>
      <img src={logo} alt="Logo" />
      <p>O Electron Timer guarda seus tempos de estudos.</p>
      <p>Versão 1.0.0</p>
      <p>
        Feito por
        {' '}
        <span role="presentation" onClick={openAuthorGithub}>Gabriel Ribeiro</span>
      </p>
      <p>
        Versão do Electron
        {' '}
        {versions.electron}
      </p>
    </Container>
  );
}

export default About;
