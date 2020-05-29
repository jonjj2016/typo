import {
    Types
} from './actions';
import {
    findRandom,
    randomWord
} from '../../helpers/helper'
const initState = {
    start: false,
    sec: 0,
    loose: false,
    score: 0,
    current: "",
    message: "",
    lvl: 0,
    word: '',
    userInput: '',
    words: []
};
export const game1Reducer = (state = initState, action) => {
    switch (action.type) {
        case Types.START_GAME:

            return {
                ...state,
                start: true,

                current: randomWord(state.words)
            };
        case Types.LOAD_WORDS:
            let words
            if (state.lvl <= 3) {
                words = findRandom(3)
            } else {
                words = findRandom(state.lvl)
            }
            return {
                ...state,
                words,
                current: randomWord(words)

            }
        case Types.INCREMENT_SEC:
            return {
                ...state,
                sec: state.sec + 1
            }
        case Types.USER_INPUT:
            if (state.lvl >= 4 && action.payload === state.current) {
                return {
                    ...state,
                    words: findRandom(Math.ceil(state.lvl)),
                    sec: 0,
                    score: state.score + 1,
                    userInput: "",
                    lvl: state.lvl + .1,

                    current: randomWord(state.words)
                }
            }
            // if(state.sec==0)
            if (action.payload === state.current) {
                return {
                    ...state,
                    sec: 0,
                    score: state.score + 1,
                    userInput: "",
                    lvl: state.lvl + .5,
                    current: randomWord(state.words)
                }
            } else {

                return {
                    ...state,
                    start: true,
                    userInput: action.payload,

                }
            }
        case Types.NEXT_WORD:
            return {
                ...state,
                sec: 0,
                score: state.score + 1,
                userInput: "",
                lvl: state.lvl + .5,

                current: randomWord(state.words)
            }
        default:
            return state;
    }
};