// generate all the string of n bits. Assume arr[0..n-1] is an array of size n.
const generateBitString = (n: number, arr: number[], index: number) => {
    if (index === n) {
        console.log(arr.join(","))
        return
    }

    arr[index] = 0
    generateBitString(n, arr, index + 1)

    arr[index] = 1
    generateBitString(n, arr, index + 1)
}

export const startBitString = (n: number) => {
    const arr: number[] = new Array(n)
    generateBitString(n, arr, 0)
}
