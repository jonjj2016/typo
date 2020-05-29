import {
    words
} from '../data/randomWords'
export const findRandom = (num) => {
    return words.filter(word => word.length <= num)
}
export const randomWord = (arr) => {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random]
}