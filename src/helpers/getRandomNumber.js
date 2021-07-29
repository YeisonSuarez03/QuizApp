export const getRandomNumber = (min, max) => {

    let number = Math.floor(Math.random() * (max - min) + min);
    return number;
}
    
