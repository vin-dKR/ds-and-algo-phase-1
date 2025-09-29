export const recInsertionSort = (arr: number[], i: number = 1): number[] => {
    if (i >= arr.length) return arr

    let key = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] < key) {
        arr[j + 1] = arr[j]
        j--
    }
    arr[j + 1] = key

    return recInsertionSort(arr, i + 1)
}
