class Node {
    data: number
    next: Node | null

    constructor(data: number) {
        this.data = data
        this.next = null
    }
}

export class LinkedListQ6 {
    head: Node | null
    size: number

    constructor() {
        this.head = null
        this.size = 0
    }

    // 1. insert at begening
    insertAtBeg(data: number): void {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        this.size++
    }

    insertAtEnd(data: number): void {
        if (!this.head) {
            this.insertAtBeg(data)
        } else {
            const newNode = new Node(data)
            let curr = this.head

            while (curr.next !== null) {
                curr = curr.next
            }
            curr.next = newNode
            this.size++
        }

    }

    insertAtPosition(data: number, position: number): boolean {
        if (position < 0 || position > this.size) {
            return false
        }

        if (position === 0) {
            this.insertAtBeg(data)
            return true
        }
        const newNode = new Node(data)
        let curr = this.head
        let index = 0

        while (index < position - 1) {
            curr = curr!.next
            index++
        }

        newNode.next = curr!.next
        curr!.next = newNode
        this.size++
        return true
    }

    insertInSortedLL(data: number) {
        const newNode = new Node(data)

        if (this.head === null || data <= this.head.data) {
            newNode.next = this.head
            this.head = newNode
            this.size++
            return
        }

        let curr: Node | null = this.head

        while (curr.next !== null && curr.next.data < data) {
            curr = curr?.next
        }

        newNode.next = curr.next
        curr.next = newNode
        this.size++
    }

    display() {
        if (this.head === null) {
            console.log("the list is empty")
            return
        }

        let curr = this.head
        const values: number[] = []

        while (curr !== null) {
            values.push(curr.data)
            curr = curr.next!
        }
        console.log(values.join(' → '))
    }
}
