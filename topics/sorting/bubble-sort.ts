export const bubbleSort = (arr: number[]) => {
    for (let i = 0; i < arr.length - 1; i++) {
        console.log(i)

        for (let j = 0; j < arr.length - 1 - i; j++) {
            console.log("--------", arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
