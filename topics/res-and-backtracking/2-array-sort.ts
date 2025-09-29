// is it a sorted array
export const isSortedArray = (arr: number[], index = arr.length): boolean => {
    if (arr.length === 1 || index === 1) {
        return true
    }

    return (arr[index - 1] < arr[index - 2] ? false : isSortedArray(arr, index - 1))
}
