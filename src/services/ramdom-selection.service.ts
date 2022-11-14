// Random selection will return pseudo randomly an element from an array
// Members array length
// min = 0 max = array le calculation Random number
export const getRandomValue = (max: number = 10): number => Math.floor(Math.random() * max);
export const getRandomValueFromRange = (max: number = 10, upperThreshold: number = 5): number => 
    Math.abs(Math.floor(Math.random() * max) - upperThreshold);
