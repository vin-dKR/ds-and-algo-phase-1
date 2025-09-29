import { kAryStringGen } from "../topics/res-and-backtracking/4-k-ary-string-gen";

{/*
    import { startBitString } from "../topics/res-and-backtracking/3-gen-str-of-nbits";
    import { towerOfHanoi } from "../topics/res-and-backtracking/1-tower-of-hanoi";
    import { isSortedArray } from "../topics/res-and-backtracking/2-array-sort";
*/}

{/*
    const xxx = towerOfHanoi(3, "A", "B", "C")
    const isSorted = isSortedArray([0, 1, 4, 8, 9])
*/}

const arr = kAryStringGen(3, 2)
console.log(arr)
