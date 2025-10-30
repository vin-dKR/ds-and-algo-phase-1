class Node {
    data: number
    next: Node | null
    prev: Node | null

    constructor(data: number) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class CircularLL {
    head: Node | null = null
    tail: Node | null = null
    length: number = 0


}
