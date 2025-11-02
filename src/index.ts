import { CircularLL } from "../topics/3-linked-list/0-circular-ll"

{/*
    import { DoublyLinkedList } from "../topics/3-linked-list/0-doubly-ll"
    import { LinkedList } from "../topics/3-linked-list/0-ll";
    import { towerOfHanoi } from "../topics/res-and-backtracking/1-tower-of-hanoi";
    import { kAryStringGen } from "../topics/res-and-backtracking/4-k-ary-string-gen";
    import { startBitString } from "../topics/res-and-backtracking/3-gen-str-of-nbits";
    import { towerOfHanoi } from "../topics/res-and-backtracking/1-tower-of-hanoi";
    import { isSortedArray } from "../topics/res-and-backtracking/2-array-sort";
*/}

{/*
    const xxx = towerOfHanoi(3, "A", "B", "C")
    const isSorted = isSortedArray([0, 1, 4, 8, 9])
    const arr = startBitString(4)
*/}

const list = new CircularLL()

list.append(2)
list.append(4)
list.append(1)
list.append(0)
const pos = list.getValAtPosition(0)

console.log(pos)
