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
        let ll = new Node(arr[0])

        for (let i = 1; i < arr.length; i++) {
            ll.next = new Node(arr[i])
        }

        const retArr: number[] = []
        let retCurr: Node | null = ll

        while (retCurr !== null) {
            retArr.push(retCurr.data)
            retCurr = retCurr.next
        }

        return retArr
    }

}
