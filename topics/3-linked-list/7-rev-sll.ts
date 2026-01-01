class Node {
    data: number;
    next: Node | null

    constructor(data: number) {
        this.data = data
        this.next = null
    }
}

export class RevSll {
    head: Node | null
    size: number

    constructor() {
        this.head = null
        this.size = 0
    }

    insertInLL(data: number) {
        const newNode = new Node(data)

        if (!this.head) {
            this.head = newNode
            this.size++
        } else {
            let curr: Node | null = this.head

            while (curr?.next !== null) {
                curr = curr.next
            }

            curr.next = newNode
            this.size++
        }
    }

    reverseLL() {
        let curr = this.head

        const arr: number[] = []

        while (curr !== null) {
            arr.push(curr.data)
            curr = curr.next
        }

        return arr.reverse()
    }
}
