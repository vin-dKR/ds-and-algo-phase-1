class Node {
    data: number;
    next: Node | null

    constructor(data: number) {
        this.data = data
        this.next = null
    }
}


//Floyd Cycle Algo -- O(n)
export function hasCycle(head: Node | null): boolean {
    if (!head || !head.next) return false;

    let slow: Node | null = head
    let fast: Node | null = head

    while (fast !== null && fast.next !== null) {
        slow = slow!.next
        fast = fast.next.next
        console.log("slow:", slow?.data, "--and--", "fast:", fast?.data)
        console.log("-------------")

        if (slow === fast) {
            return true
        }
    }

    return false
}

function createList1() {
    const n1 = new Node(1);
    const n2 = new Node(2);
    const n3 = new Node(3);
    const n4 = new Node(4);
    const n5 = new Node(5);
    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n5;
    n5.next = n3;           // Cycle starts at 3
    return n1;
}

export const testIt = () => {
    const linkedList = createList1()

    const result = hasCycle(linkedList)
    return result
}
