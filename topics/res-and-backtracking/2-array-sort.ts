export const sortArrayRec = (arr: number[], index: number): number => {
    if (arr.length === 1 || index === 1) {
        return 1
    }

    return (arr[index - 1] < arr[index - 2] ? 0 : sortArrayRec(arr, index - 1))
}
