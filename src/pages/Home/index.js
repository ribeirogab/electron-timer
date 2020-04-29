import React, { useState, useEffect } from 'react';
import { FiInfo, FiPlay, FiPause } from 'react-icons/fi';
import moment from 'moment';

import {
  Container, Box, About, Timer, Clock, Control, Course,
} from './styles';

const { ipcRenderer } = window.require('electron');

function Home() {
  document.title = 'Electron Timer';
  const [timerOn, setTimerOn] = useState(false);
  const [timer, setTimer] = useState('00:00:00');
  const [idInterval, setIdInterval] = useState(null);

  function handleAbout() {
    ipcRenderer.send('open-about-window', 'about');
  }

  useEffect(() => {
    if (timerOn) {
      let seconds = moment.duration(timer).asSeconds();
      setIdInterval(setInterval(() => {
        seconds += 1;
        setTimer(
          moment().startOf('day').seconds(seconds).format('HH:mm:ss'),
        );
      }, 1000));
    } else clearInterval(idInterval);
    // eslint-disable-next-line
  }, [timerOn]);

  return (
    <>
      <About>
        <FiInfo className="btn-info" onClick={handleAbout} />
      </About>
      <Container>
        <Box>

          <h1>
            Alura Timer
          </h1>
          <Timer>
            <Clock>
              <span>{timer}</span>
            </Clock>
            <Control>
              {timerOn ? (
                <FiPause onClick={() => setTimerOn(false)} className="btn-play" />
              ) : (
                <FiPlay onClick={() => setTimerOn(true)} className="btn-play" />
              )}
            </Control>
            <Course>
              <span>logica-programação</span>
            </Course>
          </Timer>
        </Box>
      </Container>
    </>
  );
}

export default Home;
