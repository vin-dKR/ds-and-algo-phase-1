class Node {
    data: number;
    next: Node | null
    prev: Node | null

    constructor(data: number) {
        this.data = data
        this.next = null
        this.prev = null
    }
}


export class DoublyLinkedList {
    //head is the first element of the LL
    head: Node | null = null

    // tail is the last element of the LL
    tail: Node | null = null
    length: number = 0

    display(): void {
        if (!this.head) {
            console.log("Empty list");
            return;
        }

        let current = this.head;
        let result = "";

        while (current) {
            result += current.data;
            if (current.next) result += " <-> ";
            current = current.next as Node;
        }

        console.log(result);
    }

    getHead() {
        return this.head
    }

    getTail() {
        return this.tail
    }

    getLength() {
        return this.length
    }

    append(num: number): void {
        const newNode = new Node(num)

        // if !head then the head and tail would be the same
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            // if it has proper tail then append the newNode to the tail
            // by joinin the symbyotic pointer to each other
            this.tail!.next = newNode
            newNode.prev = this.tail

            // now we have to update the tail it is not what is was we've
            // appended newNode so the newNode'll we the tail
            this.tail = newNode
        }
        this.length++
    }

    insertAtBeg(data: number) {
        const newNode = new Node(data)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode

            this.head = newNode
        }

        this.length++
    }

    insertAtPosition(data: number, index: number) {
        const newNode = new Node(data)

        if (index < 0 || index > this.length) {
            throw new Error("Index out of bounds")
        }

        if (index === 0) {
            this.insertAtBeg(data)
        }

        if (index === this.length) {
            this.append(data)
        }

        let current = this.head

        for (let i = 0; i < index; i++) {
            current = current!.next
        }

        newNode.next = current
        newNode.prev = current!.prev

        current!.prev!.next = newNode
        current!.prev = newNode

        this.length++
    }

    deleteHead() {
        if (!this.head) {
            throw new Error("No head is there in the list")
        }

        this.head = this.head.next
        this.head!.prev = null
    }
}
