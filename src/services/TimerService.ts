import moment from 'moment';

interface TimerDependences {
  timerOn: boolean;
  timer: string;
  idInterval: number;
  setIdInterval: Function;
  setTimer: Function;
  pauseCourse: Function;
}

export default function TimerService({
  timerOn,
  timer,
  idInterval,
  setIdInterval,
  setTimer,
  pauseCourse,
}: TimerDependences): void {
  if (timerOn) {
    let seconds = moment.duration(timer).asSeconds();

    const currentIdInterval = setInterval(() => {
      seconds += 1;

      const formatedDate = moment()
        .startOf('day')
        .seconds(seconds)
        .format('HH:mm:ss');

      setTimer(formatedDate);
    }, 1000);

    setIdInterval(currentIdInterval);
  } else if (idInterval !== 0) {
    clearInterval(idInterval);
    pauseCourse();
  }
}
