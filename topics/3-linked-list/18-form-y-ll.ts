interface YLinkedLists {
    list1: Node
    list2: Node
}

class Node {
    data: number;
    next: Node | null;

    constructor(data: number) {
        this.data = data
        this.next = null
    }
}

export function FormYLL(list1: Node, list2: Node, common: Node) {
    let tail1: Node | null = list1
    let tail2: Node = list2

    while (tail1.next !== null) {
        tail1 = tail1.next
    }
    tail1.next = common


    while (tail2.next !== null) {
        tail2 = tail2.next
    }
    tail2.next = common

    return { list1, list2 }
}


function printBothLists(result: YLinkedLists): void {
    function print(head: Node | null, name: string) {
        const values: number[] = [];
        let curr = head;
        while (curr !== null) {
            values.push(curr.data);
            curr = curr.next;
        }
        console.log(`${name}: ${values.join(' → ')}`);
    }

    print(result.list1, "List 1");
    print(result.list2, "List 2");
}


export function FormYLLC() {
    const A1 = new Node(4);
    const A2 = new Node(1);
    A1.next = A2;

    // Create list2: 5 → 6 → 1
    const B1 = new Node(5);
    const B2 = new Node(6);
    const B3 = new Node(1);
    B1.next = B2;
    B2.next = B3;

    // Create common tail: 8 → 10
    const common = new Node(8);
    common.next = new Node(10);

    const y = FormYLL(A1, B1, common);
    console.log(y)
    printBothLists(y)
}
