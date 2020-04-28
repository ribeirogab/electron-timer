import React from 'react';
const { ipcRenderer } = window.require('electron');

function Home() {
  function handleAbout() {
    ipcRenderer.send('open-about-window', 'about');
  } 

  return (
    <>
      <h1>Electron + React</h1>
      <button onClick={handleAbout}>Sobre</button>
    </>
  );
}

export default Home;
