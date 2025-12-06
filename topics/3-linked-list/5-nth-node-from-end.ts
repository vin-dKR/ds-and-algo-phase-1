class Node {
    data: number
    next: Node | null

    constructor(data: number) {
        this.data = data
        this.next = null
    }
}

export class LinkedList {

    arrToLL(arr: number[]) {
        let head = new Node(arr[0])
        //reference to head
        let current = head

        for (let i = 1; i < arr.length; i++) {
            current.next = new Node(arr[i])
            // make the new current to current.next
            current = current.next
        }

        return head
    }

    nthNodeFromEnd(arr: number[], position: number) {
        // Array to LinkedList
        const linkedList = this.arrToLL(arr)

    }
}
