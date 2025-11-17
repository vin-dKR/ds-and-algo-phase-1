class Node {
    data: number
    next: Node | null

    constructor(data: number) {
        this.data = data
        this.next = null
    }
}

export class RecNthNode {
    head: Node | null
    size: number

    constructor() {
        this.head = null
        this.size = 0
    }

    reverseNthNode(arr: number[], position: number) {
        if (arr.length === 0) return null;

        let head = new Node(arr[0]);
        let current = head;

        for (let i = 1; i < arr.length; i++) {
            current.next = new Node(arr[i]);
            current = current.next;
        }

        let fast: Node | null = head
        let slow: Node | null = head

        for (let i = 0; i < position; i++) {
            if (fast === null) {
                return null
            }

            fast = fast.next
        }

        while (fast !== null) {
            // console.log("--=----=-", fast)
            // console.log("-------------------------------------")
            slow = slow!.next
            fast = fast.next
        }

        return slow
    }

    display() {
        const retArr: number[] = []
        let retCurr: Node | null = this.head

        while (retCurr !== null) {
            // console.log("----", retCurr.data)
            retArr.push(retCurr.data)
            retCurr = retCurr.next
        }

        return retArr
    }

}
