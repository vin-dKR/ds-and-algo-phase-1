// Generate all the strings of length n drawn from 0. . .k -1.

const generateString = (n: number, k: number, arr: number[], index: number) => {
    if (index === n) {
        console.log(arr.join(","))
        return
    }

    for (let i = 0; i < k; i++) {
        arr[index] = i
        generateString(n, k, arr, index + 1)
    }
    console.log("--------", arr)
}

export const kAryStringGen = (n: number, k: number) => {
    const arr = new Array(n)
    generateString(n, k, arr, 0)
}
