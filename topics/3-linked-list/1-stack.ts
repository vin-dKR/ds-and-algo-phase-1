class Node {
    data: number
    next: Node | null
    constructor(data: number) {
        this.data = data
        this.next = null
    }
}

export class Stack {
    top: Node | null
    length: number

    constructor() {
        this.top = null
        this.length = 0
    }

    push(data: number) {
        const newTopNode = new Node(data)
        newTopNode.next = this.top
        this.top = newTopNode

        this.length++
    }

    pop() {
        if (!this.top) {
            return "The stack is empty!"
        }
        const topVal = this.top.data
        this.top = this.top.next

        return topVal
    }

    isEmpty(): boolean {
        return this.top === null
    }

    size() {
        return this.length
    }

    toArray() {
        let curr = this.top
        const arr = []
        while (curr) {
            arr.push(curr.data)
            curr = curr.next
        }

        return arr
    }
}
