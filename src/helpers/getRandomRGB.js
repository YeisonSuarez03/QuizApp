import { getRandomNumber } from "./getRandomNumber"

export const getRandomRGB = () => {
    
    let rgb = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`; 
    return rgb;
}