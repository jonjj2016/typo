export const Types = {
    START_GAME: "START_GAME",
    LOAD_WORDS: "LOAD_WORDS",
    INCREMENT_SEC: "INCREMENT_SEC",
    USER_INPUT: "USER_INPUT",
    NEXT_WORD: "NEXT_WORD"
}
export const startGame = () => ({
    type: Types.START_GAME
})
export const loadWords = () => ({
    type: Types.LOAD_WORDS
})
export const incrementSec = () => ({
    type: Types.INCREMENT_SEC
});
export const userInput = (data) => ({
    type: Types.USER_INPUT,
    payload: data
})
export const nextWord = () => ({
    type: Types.NEXT_WORD
})