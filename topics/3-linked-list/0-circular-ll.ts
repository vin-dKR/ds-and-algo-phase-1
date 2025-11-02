class Node {
    data: number
    next: Node | null

    constructor(data: number) {
        this.data = data
        this.next = null
    }
}

export class CircularLL {
    head: Node | null = null
    tail: Node | null = null
    length: number = 0

    append(data: number) {
        const newNode = new Node(data)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            this.tail!.next = this.head
        } else {
            this.tail!.next = newNode
            newNode.next = this.head

            // update the new tail
            this.tail = newNode
        }
        this.length++
    }

    insetInBeg(data: number) {
        const newNode = new Node(data)

        if (!this.head) {
            this.append(data)
            return
        } else {
            newNode.next = this.head
            this.tail = newNode

            this.head = newNode
        }
        this.length++
    }

    getValAtPosition(position: number) {
        if (!this.head || position < 0 || this.length <= position) return

        let curr = this.head
        let i = 0

        while (i < position) {
            curr = curr.next!
            i++
        }

        return curr.data
    }

    removeAtPos(position: number) {
        if (!this.head || position < 0 || this.length <= position) return

        let curr = this.head
        let i = 0

        while (i < position) {
            curr = curr.next!
            i++
        }

        const toJoinNode = curr.next!.next
    }
    removeHead() {
        if (!this.head) return

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail!.next = this.head.next
            this.head = this.head.next
        }
        this.length--
    }

    display(): string {
        if (!this.head) return "No LL"
        const vals: number[] = []

        let curr = this.head
        do {
            vals.push(curr.data)
            curr = curr.next!
        } while (curr != this.head)

        return vals.join(" → ") + " → (head)";
    }

}
