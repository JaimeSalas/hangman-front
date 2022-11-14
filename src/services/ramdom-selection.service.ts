// Random selection will return pseudo randomly an element from an array
// Members array length
// min = 0 max = array le calculation Random number
export const getRandomValue = (max: number = 10): number => Math.floor(Math.random() * max);
export const getRandomValueFromRange = (max: number = 10, upperThreshold: number = 5): number => 
    Math.abs(Math.floor(Math.random() * max) - upperThreshold);

export function randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// const rndInt = randomIntFromInterval(0, 6)
// console.log(rndInt)