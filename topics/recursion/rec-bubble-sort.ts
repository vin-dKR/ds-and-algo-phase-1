export const recBubbleSort = (arr: number[], n: number): number[] => {

    if (n <= 0) {
        return arr
    }

    for (let a = 0; a < arr.length - 1; a++) {
        if (arr[a] > arr[a + 1]) {
            let temp = arr[a]
            arr[a] = arr[a + 1]
            arr[a + 1] = temp
        } else {
        }
    }

    return recBubbleSort(arr, n - 1)
}
