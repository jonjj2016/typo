import React, { useState, useEffect, useRef } from 'react';
import { Span } from './styles/StyledDashBoard';
import { useSelector, useDispatch } from 'react-redux';
import Timer from '../Common/Timer';

const Letter = ({ letter, index }) => {
  const { start, sec } = useSelector((state) => state.game1Reducer);
  const [state, setState] = useState({
    top: 0,
    left: Math.floor(Math.random() * 100 * index) + Math.floor(Math.random() * 100 * index),
    right: Math.floor(Math.random() * 1000 * index) + Math.floor(Math.random() * 50 * index),
    speed: 10,
    blown: false,
    x: (index + 2) * Math.floor(Math.random() * 1000 * index) + Math.floor(Math.random() * 50 * index),
    y: 0,
  });
  console.log(letter);
  const element = useRef();
  const reposition = () => {
    if (!element.current) {
      setState({ ...state, top: state.top + 1, blown: true });
    } else if (element.current.getBoundingClientRect().top >= 800) {
      setState({ ...state, blown: true });
    } else {
      setState({ ...state, top: state.top + 1 });
    }
  };
  //   const style = { position: 'fixed', top: 0, left: `${state.x}%`, right: `${state.y}%` };
  //   const style = { position: 'absolute', top: state.top, left: state.left, right: state.right };
  return (
    <Span disp={true} time={index} ref={element}>
      {letter}
      {/* {start && !state.blown && <Timer callBack={reposition} interval={100 / state.speed} />} */}
    </Span>
  );
};

export default Letter;
