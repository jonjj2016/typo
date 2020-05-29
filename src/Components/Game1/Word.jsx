import React from 'react';
import { Word } from './styles/StyledDashBoard';
import Letter from './Letter';
import Explosion from 'react-explode/Guyam';

const MyWord = ({ word, input }) => {
  console.log(input);

  return (
    <Word reset={word === input}>
      {word.split('').map((letter, index) => {
        if (input[index] === letter) {
          return (
            <Explosion size='100' delay={0} repeatDelay={0} repeat={2}>
              {letter}
            </Explosion>
          );
        }
        return <Letter letter={letter} index={index} key={index}></Letter>;
      })}
    </Word>
  );
};

export default MyWord;
