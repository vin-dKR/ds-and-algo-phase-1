class Node {
    data: number;
    next: Node | null;
    constructor(data: number) {
        this.data = data;
        this.next = null
    }
}

export class LinkedList {
    head: Node | null = null
    length: number = 0

    getHead() {
        return this.head
    }

    //Insert the Node in the begining
    insertAtBeg(data: number): void {
        const newNode = new Node(data)

        if (!this.head) {
            this.head = newNode;
            return
        }

        const head = this.head
        this.head = newNode
        newNode.next = head

        this.length = this.length + 1
    }


    // Insert the Node in the end
    append(data: number): void {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return
        }

        let current = this.head;
        while (current.next) {
            console.log("-----", current.next)
            current = current.next;
        }

        current.next = newNode

        this.length = this.length + 1
    }
}
