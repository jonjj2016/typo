import React, { useState, useEffect, useRef } from 'react';
import { userInput } from '../../redux/Game1/actions';
import { useDispatch, useSelector } from 'react-redux';
import { StyledDashBoard, Wrapper, Word, Span } from './styles/StyledDashBoard';
import Input from '../Common/Input';
import Letter from './Letter';
import Explosion from 'react-explode/Guyam';
import MyWord from './Word';
// import Timer from '../Common/Timer';

const DashBoard = ({ word }) => {
  const [top, setTop] = useState(0);
  const dispatch = useDispatch();
  const { userInput: input, current, start } = useSelector((state) => state.game1Reducer);
  const element = useRef();
  const onChange = (e) => {
    dispatch(userInput(e.target.value));
  };
  //   const checkPosition = () => {
  //     console.log(element.current.getBoundingClientRect().top);
  //     setTop(top + 0.1);
  //   };
  return (
    <Wrapper>
      {' '}
      <StyledDashBoard>
        {/* {start && <Timer callBack={checkPosition} interval={10} />} */}
        {input !== current && (
          <MyWord top={top} ref={element} input={input} word={current} />
          //   <Word top={top} ref={element}>
          //     {current.split('').map((letter, index) => {
          //       if (input[index] === letter) {
          //         return (
          //           <Explosion size='100' delay={0} repeatDelay={0} repeat={2}>
          //             {letter}
          //           </Explosion>
          //         );
          //       }
          //       return <Letter letter={letter} index={index} key={index}></Letter>;
          //     })}
          //   </Word>
        )}
      </StyledDashBoard>
      <Input value={input} onChange={onChange} placeholder='Tyle here' />
    </Wrapper>
  );
};

export default DashBoard;
