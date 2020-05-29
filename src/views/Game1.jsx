import React, { useEffect, useState } from 'react';
import DashBoard from '../Components/Game1/DashBoard';
import InfoBar from '../Components/Game1/InfoBar';
import styled from 'styled-components';
import { startGame, incrementSec, loadWords, nextWord } from '../redux/Game1/actions';
import { useSelector, useDispatch } from 'react-redux';
import Timer from '../Components/Common/Timer';

const Game1 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadWords());
  }, []);
  const { words, start, sec, current, word, userInput } = useSelector((state) => state.game1Reducer);
  const count = () => {
    dispatch(incrementSec());
  };
  const checkMatch = () => {
    if (userInput === current) {
      alert('win');
    }
  };
  return (
    <Wrapper>
      {start && <Timer callBack={count} interval={1000} />}
      {/* {start && <Timer callBack={checkMatch} interval={10} />} */}
      <DashBoard words={words} />
      <InfoBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export default Game1;
