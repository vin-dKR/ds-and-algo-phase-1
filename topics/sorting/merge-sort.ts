export const mergeSort = (arr: number[]): number[] => {
    if (arr.length <= 1) {
        return arr
    }

    const mid = Math.floor(arr.length / 2)

    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}

export const merge = (left: number[], right: number[]): number[] => {
    let arr: number[] = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            arr.push(left[leftIndex])
            leftIndex++
        } else {
            arr.push(right[rightIndex])
            rightIndex++
        }
    }

    while (leftIndex < left.length) {
        arr.push(left[leftIndex])
        leftIndex++
    }

    while (rightIndex < right.length) {
        arr.push(right[rightIndex])
        rightIndex++
    }

    return arr
}
