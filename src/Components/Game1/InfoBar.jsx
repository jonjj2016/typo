import React, { useEffect } from 'react';
import { StyledInfoBoard, DisplayWrapper } from './styles/styledInfoBar';
import Display from './Display';
import Btn from '../Common/Button';
import { startGame } from '../../redux/Game1/actions';
import { useSelector, useDispatch } from 'react-redux';

const InfoBar = () => {
  const dispatch = useDispatch();
  const onStart = () => dispatch(startGame());
  const { lvl, score, sec, start } = useSelector((state) => state.game1Reducer);

  return (
    <StyledInfoBoard>
      <DisplayWrapper>
        <Display text='Speed' info={0} />
        <Display text='Time' info={sec} />
        <Display text='Score' info={score} />
        <Display text='Lvl' info={Math.round(lvl)} />
      </DisplayWrapper>
      {/* <Btn onClick={onStart}>{start ? 'Restart' : 'Start'}</Btn> */}
    </StyledInfoBoard>
  );
};

export default InfoBar;
