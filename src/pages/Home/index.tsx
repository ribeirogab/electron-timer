import React, { useState, useEffect } from 'react';
import { FiInfo, FiPlay, FiPause, FiAlertCircle } from 'react-icons/fi';

import {
  Container,
  Box,
  About,
  Timer,
  Clock,
  Control,
  Course,
  Error,
} from './styles';

import TimerService from '../../services/TimerService';

const { ipcRenderer } = window.require('electron');

const Home: React.FC = () => {
  document.title = 'Electron Timer';
  const [timerOn, setTimerOn] = useState(false);
  const [course, setCourse] = useState('');
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState('00:00:00');
  const [idInterval, setIdInterval] = useState(0);

  function openAboutWindow(): void {
    ipcRenderer.send('open-about-window');
  }

  function pauseCourse(): void {
    ipcRenderer.send('paused-course', course, timer);
  }

  function turnOnTimer(): void {
    if (course !== '') {
      setTimerOn(true);
      setError(false);
    } else setError(true);
  }

  function turnOffTimer(): void {
    if (course !== '') setTimerOn(false);
  }

  function changeCourse(selectedCourse: string): void {
    if (selectedCourse !== '') setError(false);
    setCourse(selectedCourse);
    setTimerOn(false);
    setTimer('00:00:00');
  }

  useEffect(() => {
    TimerService({
      timerOn,
      timer,
      idInterval,
      setIdInterval,
      setTimer,
      pauseCourse,
    });
  }, [timerOn]); // eslint-disable-line

  return (
    <>
      <About>
        <FiInfo className="btn-info" onClick={openAboutWindow} />
      </About>
      <Container>
        <Box>
          <h1>Electron Timer</h1>
          <Timer>
            <Clock>
              <span>{timer}</span>
            </Clock>
            <Control>
              {timerOn ? (
                <FiPause onClick={turnOffTimer} className="btn-play" />
              ) : (
                <FiPlay onClick={turnOnTimer} className="btn-play" />
              )}
            </Control>
            <Course>
              <select onChange={e => changeCourse(e.target.value)}>
                <option value="">Escolha um curso...</option>
                <option value="programming-logic">Lógica de Programação</option>
                <option value="electron">Electron</option>
              </select>
            </Course>
            <Error error={error}>
              <FiAlertCircle size={18} />
              <span>É preciso escolher um curso antes de iniciar o timer.</span>
            </Error>
          </Timer>
        </Box>
      </Container>
    </>
  );
};

export default Home;
