export default function useShuffle<T>(array:T[]){
    const shuffledArray:T[] = []
    while(array.length > 1){
        let randomPosition = Math.floor(Math.random() * array.length)
        shuffledArray.push(array[randomPosition])
        array.splice(randomPosition,1)
    }
    shuffledArray.push(array[0])
    return shuffledArray;
}