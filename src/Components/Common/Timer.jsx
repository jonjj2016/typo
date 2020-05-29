import React from 'react';
import { useInterval } from '../../hooks/useInterval';
const Timer = ({ callBack, interval }) => {
  useInterval(callBack, interval);
  return null;
};

export default Timer;
