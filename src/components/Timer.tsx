import React, { useState, useEffect } from 'react';

interface State {
  time: number;
  seconds: number;
  minutes: number;
}

interface Props {
  time: number;
  running: boolean;
  setTime: (num: number) => void;
}

const Timer: React.FC<Props> = ({ time, running, setTime }) => {
  const [state, setState] = useState<State>({
    time,
    seconds: time - Math.floor(time / 60) * 60,
    minutes: Math.floor(time / 60),
  });

  useEffect(() => {
    if (!running) {
      setState({
        time: time + 1,
        minutes: Math.floor(state.time / 60),
        seconds: state.time - Math.floor(state.time / 60) * 60,
      });
    }
  }, [time]);

  useEffect(() => {
    if (running) {
      setTimeout(() => {
        if (!running || state.time === 0) {
          return;
        }

        setState({
          time: state.time + 1,
          minutes: Math.floor(state.time / 60),
          seconds: state.time - Math.floor(state.time / 60) * 60,
        });
      }, 1000);
    }
  }, [state.time]);

  useEffect(() => {
    if (running) {
      setTimeout(() => {
        if (!running || state.time === 0) {
          return;
        }

        setState({
          time: state.time + 1,
          minutes: Math.floor(state.time / 60),
          seconds: state.time - Math.floor(state.time / 60) * 60,
        });
      }, 1000);
    } else {
      setTime(state.time);
    }
  }, [running]);

  return (
    <div className="numbers">
      <span className={state.time % 2 !== 0 ? `timer-green` : ``}>
        {`${state.minutes}: ${
          state.seconds < 10 ? `0${state.seconds}` : state.seconds
        }`}
      </span>
    </div>
  );
};

export default Timer;
