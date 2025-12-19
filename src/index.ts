import { testIt } from "../topics/3-linked-list/10-floyd-cycle"
import { LinkedList } from "../topics/3-linked-list/5-nth-node-from-end"
import { LinkedListQ6 } from "../topics/3-linked-list/6-insert-in-sorted-ll"
{/*
    import { RecNthNode } from "../topics/3-linked-list/2-nth-node-from-end"
    import { Stack } from "../topics/3-linked-list/1-stack"
    import { CircularLL } from "../topics/3-linked-list/0-circular-ll"
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
    const list = new CircularLL()
*/}

const ll = new LinkedListQ6()

ll.insertAtEnd(40);
ll.insertAtEnd(20);
ll.insertAtEnd(30);
ll.insertAtEnd(5);

ll.display();

ll.insertAtPosition(15, 2);
ll.display();

console.log("this is the list ",)
